import {ResolveOptions} from "webpack";

function buildResolvers(): ResolveOptions {

    return {
        extensions: ['.tsx', '.ts', '.js'],  // Allow imports without specifying these extensions
    }
}

export default buildResolvers;