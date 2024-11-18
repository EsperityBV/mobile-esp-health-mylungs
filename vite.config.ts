import { defineConfig } from 'vite'
import { config } from 'dotenv'

const appEnv = config({
  path: '.env' + (process.env.NODE_ENV === 'local' || ! process.env.NODE_ENV ? '' : '.' + process.env.NODE_ENV),
}).parsed

console.log(appEnv);

export default ({ mode }) => {
  return defineConfig({
    root: './src',
    base: '',
    define: {
      __URL__: JSON.stringify(appEnv.APP_URL),
    },
    build: {
      outDir: '../dist',
      minify: false,
      emptyOutDir: true,
    }
  })
}
