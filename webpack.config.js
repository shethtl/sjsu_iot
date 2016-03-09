var path = require('path');

module.exports = {
    context: path.join(__dirname, "app"),
    entry: {
        publisher: "./js/publisher.js",
        subscriber: "./js/subscriber.js",
        index: "./index.html",
        publisherHtml: "./publisher.html",
        subscriberHtml: "./subscriber.html"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|tmp)/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
        ]
    }
};
