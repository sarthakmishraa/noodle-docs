import express from "express";
import { WebSocketServer } from "ws";

const PORT = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
    res.send("<h2>Noodle Docs backend where I am using ws node package</h2>");
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
    console.log(`Device connected`);
    ws.on("message", (message: string) => {
        const data = JSON.parse(message);
        const textContent = data.content;
        if(data.type === "text update") {
            const dataToSend = JSON.stringify({
                type: "text updated",
                content: textContent,
                docId: data.docId
            });
            wss.clients.forEach((client) => {
                client.send(dataToSend);
            })
        }
    });
    ws.on("close", () => {
        console.log(`Device Disconnected`);
    });
});