import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import modify from 'rollup-plugin-modify';

const external = [
  'scandit-capacitor-datacapture-core',
  'scandit-capacitor-datacapture-core/dist/core',
  'scandit-datacapture-frameworks-core',
  './barcode.js'
]

export default [{
  input: {
    index: './src/index.ts',
    barcode: 'scandit-datacapture-frameworks-barcode'
  },
  external,
  output: {
    dir: 'dist',
    format: 'es',
    name: 'capacitorPlugin', // TODO: change this
    globals: {
      '@capacitor/core': 'capacitorExports',
    },
    sourcemap: true,
  },
  plugins: [
    commonjs(),
    nodeResolve(),
    typescript()
  ],
},
{
  input: './dist/index.js',
  output: {
    file: './dist/index.js',
    format: 'esm'
  },
  external,
  plugins: [
    modify({
      'scandit-datacapture-frameworks-core': 'scandit-capacitor-datacapture-core/dist/core'
    })
  ]
},
{
  input: './dist/barcode.js',
  output: {
    file: './dist/barcode.js',
    format: 'esm'
  },
  external,
  plugins: [
    modify({
      'scandit-datacapture-frameworks-core': 'scandit-capacitor-datacapture-core/dist/core'
    })
  ]
}];
