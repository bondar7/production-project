import webpack from "webpack";

function buildLoaders(): webpack.RuleSetRule[] {

    const tsLoader = {
        test: /\.tsx?$/,  // Target .ts and .tsx files
        use: 'ts-loader',  // Use ts-loader to compile TypeScript
        exclude: /node_modules/,  // Skip processing files in node_modules
    }

    return [
        // 'rules' is one of the most important properties in Webpack.
        // It defines how different file types(non-js files) (e.g., TypeScript, CSS, images) should be processed.
        tsLoader
    ]
}

export default buildLoaders;