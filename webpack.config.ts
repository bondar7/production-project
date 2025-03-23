import path from 'path';  // Built-in Node.js module for working with file paths
import webpack from 'webpack';  // Webpack module for bundling
import HTMLWebpackPlugin from "html-webpack-plugin";  // Plugin to generate an HTML file with injected scripts

const config: webpack.Configuration = {
    mode: 'development',  // Set Webpack mode to 'development' (faster builds, no minification)

    entry: path.resolve(__dirname, 'src', 'index.ts'),  // Define the entry point for the app (index.ts)

    output: {
        filename: "[name].[contenthash].js",  // Output file with unique hash for caching
        path: path.resolve(__dirname, 'build'),  // Output directory for bundled files
        clean: true  // Clean the 'build' directory before each build
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')  // Use custom HTML template
        }),
        new webpack.ProgressPlugin(),  // Show build progress in the terminal
    ],

    module: {
        rules: [
            // 'rules' is one of the most important properties in Webpack.
            // It defines how different file types(non-js files) (e.g., TypeScript, CSS, images) should be processed.
            {
                test: /\.tsx?$/,  // Target .ts and .tsx files
                use: 'ts-loader',  // Use ts-loader to compile TypeScript
                exclude: /node_modules/,  // Skip processing files in node_modules
            }
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],  // Allow imports without specifying these extensions
    },
}

export default config;
