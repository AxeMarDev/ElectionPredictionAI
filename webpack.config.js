const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    // Your existing webpack config
    plugins: [
        new NodePolyfillPlugin()
    ]
};
