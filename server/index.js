import express from "express";
import { Server } from "socket.io";
import http from 'http';
import cors from "cors";

const PORT = 3000;

const app = express();

app.use(cors);

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log(`User connected with id: ${socket.id}`);
    
    socket.on("text update", (data) => {
        socket.broadcast.emit("text updated", data);
    })
});

io.on("disconnect", (socket) => {
    console.log(`User with id: ${socket.id} disconnected`);
});

server.listen(PORT, err => {
    if (err) throw err;
    console.log(`Server is running on port: ${PORT}`);
});