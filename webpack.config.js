const path = require("path");

const config = {
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: "ts-loader",
                include: [path.resolve(__dirname, "scripts", "src")],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
};

const configGame = Object.assign({}, config, {
    name: "configGame",
    devtool: "eval-source-map",
    entry: "./scripts/src/game.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public"),
    },
});

const configMain = Object.assign({}, config, {
    name: "configMain",
    devtool: "eval-source-map",
    entry: "./scripts/src/main.ts",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "public"),
    },
});

module.exports = [configGame, configMain];
