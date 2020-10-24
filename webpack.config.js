const path = require("path");

const config = {
    // module: {
    //     rules: [
    //         {
    //             test: /\.ts$/,
    //             exclude: /node_modules/,
    //             use: "ts-loader",
    //             include: [path.resolve(__dirname, "scripts", "src")],
    //         },
    //     ],
    // },
    devtool: "eval-source-map",
    resolve: {
        extensions: [".ts", ".js"],
    },
};

const configGame = Object.assign({}, config, {
    name: "configGame",
    entry: "./scripts/game/game.ts",
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: "ts-loader",
                include: [path.resolve(__dirname, "scripts", "game")],
            },
        ],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public"),
    },
});

const configMain = Object.assign({}, config, {
    name: "configMain",
    entry: "./scripts/main/main.ts",
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: "ts-loader",
                include: [path.resolve(__dirname, "scripts", "main")],
            },
        ],
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "public"),
    },
});

module.exports = [configGame, configMain];
