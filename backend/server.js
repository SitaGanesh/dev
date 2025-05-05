const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
require("dotenv").config(); // Add this to load .env

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CORS_ORIGIN || "*", // Use CORS_ORIGIN or fallback to "*"
    methods: ["GET", "POST"]
  }
});

// Store latest code for each room
const roomCodes = {};  // { roomId: latestCode }

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("joinRoom", (roomId) => {
    socket.join(roomId);
    console.log(`${socket.id} joined room: ${roomId}`);

    if (roomCodes[roomId]) {
      socket.emit("codeUpdate", roomCodes[roomId]);
    }
  });

  socket.on("codeChange", ({ roomId, code }) => {
    roomCodes[roomId] = code;
    socket.to(roomId).emit("codeUpdate", code);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000; // Use PORT or fallback to 5000
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});