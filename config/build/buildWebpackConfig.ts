import webpack from "webpack";
import buildPlugins from "./buildPlugins";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import {BuildOptions} from "./types/config";

function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const { mode, paths } = options;

    return {
        mode: mode,  // Set Webpack mode to 'development' (faster builds, no minification)

        entry: paths.entry,  // Define the entry point for the app (index.ts)

        output: {
            filename: "[name].[contenthash].js",  // Output file with unique hash for caching
            path: paths.build,  // Output directory for bundled files
            clean: true  // Clean the 'build' directory before each build
        },

        plugins: buildPlugins(options),

        module: {
            rules: buildLoaders(),
        },

        resolve: buildResolvers(),
    }
}

export default buildWebpackConfig;