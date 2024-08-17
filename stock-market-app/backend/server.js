const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');  // Import the http module
const { Server } = require('socket.io');
require('dotenv').config();

const app = express();  // Define the app variable using express
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Import routes
const stockRoutes = require('./routes/stocks');
const authRoutes = require('./routes/auth');

// Use routes
app.use('/api/stocks', stockRoutes);
app.use('/auth', authRoutes);

// Create an HTTP server and pass the app to it
const server = http.createServer(app);

// Set up Socket.io
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('a user connected');
  
  // Emit stock price updates
  socket.on('getStockPrice', (symbol) => {
    // Fetch real-time stock price and emit to the client
    // Replace with your stock market API to get real-time data
    const stockPrice = 100; // Placeholder value
    socket.emit('stockPrice', { symbol, price: stockPrice });
  });
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});