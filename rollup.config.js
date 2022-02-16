import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import path from 'path'
import { terser } from 'rollup-plugin-terser'
import analyze from 'rollup-plugin-analyzer'
import autoprefixer from 'autoprefixer'
import postcssImport from 'postcss-import'
import resolve from '@rollup/plugin-node-resolve'

// import packageJson from "./package.json"

export default [
  {
    input: './src/index.js',
    // preserveModules: true,
    manualChunks: id => path.parse(id).name,
    output: [
        {
            format: 'cjs',
            dir: './dist',
            chunkFileNames: '[name].js',
            plugins: [terser()]
        }
    ],
    plugins: [
        vue({ 
            css: false
        }),
        postcss({
            minimize: true,
            plugins: [autoprefixer(), postcssImport()]
        }),
        peerDepsExternal(),
        analyze(),
        resolve()
    ],
  },

  {
    input: ['./src/styles/index.css'],
    plugins: [
        postcss({
            extract: false,
            minimize: true,
            extract: path.resolve(`./dist/lib.css`),
            plugins: [autoprefixer(), postcssImport()]
        })
    ],
    output: [
        {
            file: path.resolve(`./dist/lib.css`)
        }
    ]
  },
]