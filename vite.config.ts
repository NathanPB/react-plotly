import react from '@vitejs/plugin-react'
import path from 'node:path'
import dts from 'vite-plugin-dts'
import { UserConfigExport } from 'vite'
import { name } from './package.json'

const app = async (): Promise<UserConfigExport> => {
  /**
   * Removes everything before the last
   * @octocat/library-repo -> library-repo
   * vite-component-library-template -> vite-component-library-template
   */
  const formattedName = name.match(/[^/]+$/)?.[0] ?? name

  return {
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
      }),
    ],
    build: {
      sourcemap: true,
      lib: {
        entry: path.resolve(__dirname, 'src/lib/index.ts'),
        name: formattedName,
        formats: ['es', 'umd'],
        fileName: (format) => `${formattedName}.${format}.js`,
      },
      rollupOptions: {
        external: ['react', 'react/jsx-runtime', 'react-dom', 'plotly.js-dist-min', 'prop-types'],
      },
    }
  }
}
// https://vitejs.dev/config/
export default app
