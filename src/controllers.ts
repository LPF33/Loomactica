import { Request, Response } from "express";
import { v4 } from "uuid";

// import path from "path";
// for my repetition without Express and to promisify fs
// import fs from "fs";
// import util from "util";
// const readFile = util.promisify(fs.readFile);

const getMain = async (req: Request, res: Response) => {
    try {
        // res.sendFile(path.join(__dirname, "../view/index.html"), {
        //     headers: { "Content-Type": "text/html" },
        // });
        const room = v4();
        const serverUrl =
            process.env.NODE_ENV === "development"
                ? "localhost:3000"
                : "https://loomactica.herokuapp.com";

        res.render("index", {
            tabTitle: "LOOMACTICA",
            alink: "/play/" + room,
            link: serverUrl + "/play/" + room,
        });
    } catch (err) {
        // res.status(500).sendFile(path.join(__dirname, "../view/error.html"));
        res.render("error", { tabTitle: "LOOMACTICA ERROR" });
    }
};

const playGame = async (req: Request, res: Response) => {
    const { id } = req.params;
    res.render("game", { tabTitle: "Welcome" });
};

const unknownRoutes = async (req: Request, res: Response) => {
    // const htmlFile = await readFile("./view/404.html");
    // res.setHeader("Content-Type", "text/html");
    // res.status(404).end(htmlFile);

    // res.status(404).sendFile("./view/404.html", { root: __dirname + "/../" });

    res.render("404", { tabTitle: "404" });
};

export { getMain, unknownRoutes, playGame };
