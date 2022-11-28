import { resolve } from 'path'
import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				nested: resolve(__dirname, 'nested/index.html')
			}
		}
	},
	plugins: [eslintPlugin()]
})
