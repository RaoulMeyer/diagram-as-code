import nodeTypes from './nodeTypes';
import vis from 'vis-network';

class NodeInterface {
    exchangesDataWith(node) {
        throw new Exception('Not implemented');
    }
    getsDataFrom(node) {
        throw new Exception('Not implemented');
    }
    sendsDataTo(node) {
        throw new Exception('Not implemented');
    }
    getIds(node) {
        throw new Exception('Not implemented');
    }
    getNodes(node) {
        throw new Exception('Not implemented');
    }
    getEdges(node) {
        throw new Exception('Not implemented');
    }
}

class Node extends NodeInterface {
    /**
     * @param {string}           label
     * @param {string}           image
     * @param {number|undefined} position
     * @param {number}           [count = 1]
     */
    constructor(label, image, position, count = 1) {
        super();

        this._ids = Array.from(Array(count), () => Math.random().toString(36));

        this._label = label;
        this._image = image;
        this._position = position;
        this._edges = [];

        window.diagram.add(this);
    }

    /**
     * @param {NodeInterface} node
     */
    exchangesDataWith(node) {
        for (const otherId of node.getIds()) {
            for (const id of this._ids) {
                this._edges.push({
                    from: id,
                    to: otherId,
                    arrows: {
                        to: {
                            enabled: true,
                        },
                        from: {
                            enabled: true,
                        },
                    },
                });
            }
        }
    }

    /**
     * @param {NodeInterface} node
     */
    getsDataFrom(node) {
        for (const otherId of node.getIds()) {
            for (const id of this._ids) {
                this._edges.push({
                    from: otherId,
                    to: id,
                    arrows: {
                        to: {
                            enabled: true,
                        },
                    },
                });
            }
        }
    }

    /**
     * @param {NodeInterface} node
     */
    sendsDataTo(node) {
        for (const otherId of node.getIds()) {
            for (const id of this._ids) {
                this._edges.push({
                    from: id,
                    to: otherId,
                    arrows: {
                        to: {
                            enabled: true,
                        },
                    },
                });
            }
        }
    }

    /**
     * @returns string[]
     */
    getIds() {
        return this._ids;
    }

    /**
     * @returns Object[]
     */
    getNodes() {
        return this._ids.map(id => {
            const node = {
                id,
                label: this._label,
                image: this._image,
                shape: this._image ? 'image' : 'ellipse',
            };

            if (this._position !== undefined) {
                node.level = this._position;
            }

            return node;
        });
    }

    /**
     * @returns Object[]
     */
    getEdges() {
        return this._edges;
    }
}

for (const node of nodeTypes) {
    window[node.name] = class extends Node {
        constructor(label, position) {
            super(label || node.label, node.image, position, node.count);

            return new Proxy(this, {
                get: function(object, property) {
                    if (Reflect.has(object, property)) {
                        return Reflect.get(object, property);
                    } else if (property.toLowerCase().slice(-4) === 'from') {
                        return object.getsDataFrom;
                    } else if (property.toLowerCase().slice(-2) === 'to') {
                        return object.sendsDataTo;
                    } else if (property.toLowerCase().slice(-4) === 'with') {
                        return object.exchangesDataWith;
                    } else {
                        throw new Error(`Method ${property} does not exist.`);
                    }
                },
            });
        }
    };
}

window.Custom = Node;

class Diagram {
    constructor() {
        this._options = {};
        this._items = [];
    }

    /**
     * @param  {NodeInterface[]} items
     */
    add(...items) {
        this._items.push(...items);
    }

    /**
     * @param {Object} config
     */
    render(config = {}) {
        const { leftToRight, container } = config;

        const nodes = [];
        const edges = [];

        for (const item of this._items) {
            nodes.push(...item.getNodes());
            edges.push(...item.getEdges());
        }

        if (!document.body) {
            document.body = document.createElement('body');
            document.body.style.width = '100vw';
            document.body.style.height = '100vh';
        }

        this._network = new vis.Network(
            container || document.body,
            {
                nodes: new vis.DataSet(nodes),
                edges: new vis.DataSet(edges),
            },
            {
                layout: {
                    hierarchical: {
                        direction: leftToRight || false ? 'LR' : 'RL',
                        edgeMinimization: true,
                        enabled: true,
                        levelSeparation: 200,
                        nodeSpacing: 200,
                        sortMethod: 'directed',
                    },
                },
                physics: {
                    enabled: false,
                },
                ...this._options,
            }
        );

        this._network.on('beforeDrawing', function(context) {
            context.save();

            context.setTransform(1, 0, 0, 1, 0, 0);
            context.fillStyle = '#fff';
            context.fillRect(0, 0, context.canvas.width, context.canvas.height);

            context.restore();
        });
    }
}

window.diagram = new Diagram();
