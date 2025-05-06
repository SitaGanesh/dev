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
    origin: (origin, callback) => {
      // Accept both slash and no-slash variants
      if (
        origin === 'https://dev-psi-seven.vercel.app' ||
        origin === 'https://dev-psi-seven.vercel.app/'
      ) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST'],
    credentials: true
  },
  addTrailingSlash: false 
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

const PORT = process.env.PORT || 3001;  // Use PORT or fallback to 5000
server.listen(PORT,'0.0.0.0', () => {
  console.log(`Server running on ${PORT}`);
});
app.get('/', (req, res) => res.send('OK'));