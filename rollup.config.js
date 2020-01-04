import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'lib/lib.js',
    output: {
        dir: 'dist',
        format: 'umd',
        name: 'diagram-as-code-js',
    },
    plugins: [resolve(), terser()],
};
