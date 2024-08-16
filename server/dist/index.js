"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const PORT = process.env.PORT;
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("<h2>Noodle Docs backend where I am using ws node package</h2>");
});
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const wss = new ws_1.WebSocketServer({ server });
wss.on("connection", (ws) => {
    console.log(`Device connected`);
    ws.on("message", (message) => {
        const data = JSON.parse(message);
        const textContent = data.content;
        if (data.type === "text update") {
            const dataToSend = JSON.stringify({
                type: "text updated",
                content: textContent,
                docId: data.docId
            });
            wss.clients.forEach((client) => {
                client.send(dataToSend);
            });
        }
    });
    ws.on("close", () => {
        console.log(`Device Disconnected`);
    });
});
