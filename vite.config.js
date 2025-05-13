import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/components'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@ui': path.resolve(__dirname, './src/components/ui'),
			'@features': path.resolve(__dirname, './src/features'),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@utils': path.resolve(__dirname, './src/utils'),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @use "@styles/colors" as *;
          @use "@styles/mixins" as *;
        `,
			},
		},
	},
})
