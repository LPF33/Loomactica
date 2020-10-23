import http from "http";
import express, { Express } from "express";
import expressHandlebars from "express-handlebars";
import dotenv from "dotenv";
import router from "./routes";
import socket from "socket.io";
import { SocketConnection } from "./socket";

const app: Express = express();
const server: http.Server = http.createServer(app);
const io = socket(server);
SocketConnection(io);

dotenv.config();

app.engine("handlebars", expressHandlebars());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.use(router);

const PORT: string | number = process.env.PORT || 3000;
server.listen(PORT, () => console.log("Server running on port " + PORT));
