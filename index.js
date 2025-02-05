const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = 5000;

// Import routes
const menuRoutes = require("./routes/menuRoutes");

app.use(express.json()); // Middleware to parse JSON

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("MongoDB Connection Error:", err));

// Use the menu routes
app.use("/menu", menuRoutes); // Route for menu

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
