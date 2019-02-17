class NodeInterface {
    exchangesDataWith(node) { throw new Exception('Not implemented') }
    getsDataFrom(node) { throw new Exception('Not implemented') }
    sendsDataTo(node) { throw new Exception('Not implemented') }
    getIds(node) { throw new Exception('Not implemented') }
    getNodes(node) { throw new Exception('Not implemented') }
    getEdges(node) { throw new Exception('Not implemented') }
}

class Node extends NodeInterface {
    /**
     * @param {string} label 
     * @param {string} image 
     * @param {number} [count = 1] 
     */
    constructor(label, image, count = 1) {
        super();

        this._ids = Array.from(Array(count), () => Math.random().toString(36));

        this._label = label;
        this._image = image;
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
                            enabled: true
                        },
                        from: {
                            enabled: true
                        }
                    }
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
                            enabled: true
                        }
                    }
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
                            enabled: true
                        }
                    }
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
        return this._ids.map(id => { return {
            id,
            label: this._label,
            image: this._image,
            shape: this._image ? 'image' : 'ellipse'
        }});
    }

    /**
     * @returns Object[]
     */
    getEdges() {
        return this._edges;
    }
}

const nodeTypes = [
    /**
     * Generic
     */
    {
        name: 'Client',
        label: 'Client',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Non-Service_Specific_copy_Users-512.png',
        count: 1
    },

    {
        name: 'Server',
        label: 'Server',
        image: 'https://cdn0.iconfinder.com/data/icons/octicons/1024/server-256.png',
        count: 1
    },
    {
        name: 'ServerCluster',
        label: 'Server',
        image: 'https://cdn0.iconfinder.com/data/icons/octicons/1024/server-256.png',
        count: 2
    },

    {
        name: 'Database',
        label: 'Database',
        image: 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/database-256.png',
        count: 1
    },
    {
        name: 'DatabaseCluster',
        label: 'Database',
        image: 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/database-256.png',
        count: 2
    },

    /**
     * Databases
     */
    {
        name: 'Mysql',
        label: 'MySQL',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Database_copy_Amazon_RDS_MySQL_DB_Instance-512.png',
        count: 1
    },
    {
        name: 'MysqlCluster',
        label: 'MySQL',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Database_copy_Amazon_RDS_MySQL_DB_Instance-512.png',
        count: 2
    },

    {
        name: 'Oracle',
        label: 'Oracle',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Database_copy_Amazon_RDS_Oracle_DB_Instance-512.png',
        count: 1
    },
    {
        name: 'OracleCluster',
        label: 'Oracle',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Database_copy_Amazon_RDS_Oracle_DB_Instance-512.png',
        count: 2
    },

    {
        name: 'PostgreSql',
        label: 'PostgreSQL',
        image: 'https://severalnines.com/sites/default/files/postgresql_0.png',
        count: 1
    },
    {
        name: 'PostgreSqlCluster',
        label: 'PostgreSQL',
        image: 'https://severalnines.com/sites/default/files/postgresql_0.png',
        count: 2
    },

    {
        name: 'Elasticsearch',
        label: 'Elasticsearch',
        image: 'https://ria.gallerycdn.vsassets.io/extensions/ria/elastic/0.13.3/1530754501320/Microsoft.VisualStudio.Services.Icons.Default',
        count: 1
    },
    {
        name: 'ElasticsearchCluster',
        label: 'Elasticsearch',
        image: 'https://ria.gallerycdn.vsassets.io/extensions/ria/elastic/0.13.3/1530754501320/Microsoft.VisualStudio.Services.Icons.Default',
        count: 3
    },

    /**
     * AWS
     */
    {
        name: 'Ec2',
        label: 'EC2',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Compute__Networking_copy_Amazon_EC2---512.png',
        count: 1
    },
    {
        name: 'Ec2Cluster',
        label: 'EC2',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Compute__Networking_copy_Amazon_EC2---512.png',
        count: 2
    },

    {
        name: 'Rds',
        label: 'RDS',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Database_copy_Amazon_RDS-512.png',
        count: 1
    },
    {
        name: 'RdsCluster',
        label: 'RDS',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Database_copy_Amazon_RDS-512.png',
        count: 2
    },

    {
        name: 'Elb',
        label: 'ELB',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Compute__Networking_copy_Elastic_Load_Balancing-512.png',
        count: 1
    },

    {
        name: 'S3',
        label: 'S3',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Storage__Content_Delivery_Amazon_S3_Bucket-256.png',
        count: 1
    },

    {
        name: 'DynamoDb',
        label: 'DynamoDB',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Database_copy_DynamoDB-256.png',
        count: 1
    },

    {
        name: 'Redshift',
        label: 'Redshift',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Database_copy_Amazon_RedShift-256.png',
        count: 1
    },

    {
        name: 'Cloudwatch',
        label: 'Cloudwatch',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_CloudWatch-256.png',
        count: 1
    },

    {
        name: 'Elasticache',
        label: 'Elasticache',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Database_copy_Amazon_ElasticCache-256.png',
        count: 1
    },

    {
        name: 'Iam',
        label: 'IAM',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_IAM-256.png',
        count: 1
    },

    {
        name: 'SimpleDb',
        label: 'SimpleDB',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Database_copy_Amazon_SimpleDB-256.png',
        count: 1
    },

    {
        name: 'Swf',
        label: 'SWF',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/App_Services_copy_Amazon_SWF-256.png',
        count: 1
    },

    {
        name: 'Cloudfront',
        label: 'Cloudfront',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Storage__Content_Delivery_Amazon_CloudFront-256.png',
        count: 1
    },

    {
        name: 'Sqs',
        label: 'SQS',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/App_Services_copy_Amazon_SQS-256.png',
        count: 1
    },

    {
        name: 'Sns',
        label: 'SNS',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/App_Services_copy_Amazon_SNS-256.png',
        count: 1
    },

    {
        name: 'Route53',
        label: 'Route53',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Compute__Networking_copy_Amazon_Route_53-256.png',
        count: 1
    },

    {
        name: 'StorageGateway',
        label: 'Storage Gateway',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Storage__Content_Delivery_AWS_Storage_Gateway-256.png',
        count: 1
    },

    {
        name: 'CloudFormation',
        label: 'CloudFormation',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_AWS_CloudFormation-256.png',
        count: 1
    },

    {
        name: 'CloudSearch',
        label: 'CloudSearch',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/App_Services_copy_Amazon_CloudSearch-256.png',
        count: 1
    },

    {
        name: 'Glacier',
        label: 'Glacier',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Storage__Content_Delivery_Amazon_Glacier-256.png',
        count: 1
    },

    {
        name: 'ElasticBeanstalk',
        label: 'Elastic Beanstalk',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Deployment__Management_copy_Elastic_Beanstalk-256.png',
        count: 1
    },

    {
        name: 'Ebs',
        label: 'EBS',
        image: 'https://cdn2.iconfinder.com/data/icons/amazon-aws-stencils/100/Storage__Content_Delivery_Amazon_EBS-256.png',
        count: 1
    },

    {
        name: 'Lambda',
        label: 'Lambda',
        image: 'https://symbols.getvecta.com/stencil_9/36_lambda-function.d6669d79be.svg',
        count: 1
    },

    {
        name: 'ApiGateway',
        label: 'API Gateway',
        image: 'https://freeicons.io/laravel/public/uploads/icons/png/17585176481536126577-512.png',
        count: 1
    },

]

window.dac = [];

for (const node of nodeTypes) {
    window.dac[node.name] = class extends Node {
        constructor(label) {
            super(
                label || node.label,
                node.image,
                node.count
            )
        }
    }
}

window.dac.Custom = Node;

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
     * @param {Element} container 
     * @param {boolean} [leftToRight = true] 
     */
    render(container = null, leftToRight = false) {
        const nodes = [];
        const edges = [];

        for (const item of this._items) {
            nodes.push(...item.getNodes());
            edges.push(...item.getEdges());
        }

        this._network = new vis.Network(
            container || document.body,
            {
                nodes: new vis.DataSet(nodes),
                edges: new vis.DataSet(edges)
            },
            {
                layout: {
                    hierarchical: {
                        direction: leftToRight ? 'LR' : 'RL',
                        edgeMinimization: true,
                        enabled: true,
                        levelSeparation: 200,
                        nodeSpacing: 200,
                        sortMethod: 'directed'
                    },
                },
                physics: {
                    enabled: false
                },
                ...this._options
            }
        );

        this._network.on('beforeDrawing',  function(context) {
            context.save();

            context.setTransform(1, 0, 0, 1, 0, 0);
            context.fillStyle = '#fff';
            context.fillRect(0, 0, context.canvas.width, context.canvas.height)

            context.restore();
        });
    }
}

window.diagram = new Diagram();