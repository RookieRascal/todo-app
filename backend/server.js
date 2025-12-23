
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const todoRoutes = require("./routes/todoRoutes");

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/todoDB")
.then(() => console.log("MongoDB connected"))

.catch(err => console.log(err));

app.use("/todos", todoRoutes);


app.get("/", (req, res) => {
	  res.send("Todo API Running");
});

app.listen(5000, () => {
	  console.log("Server running on port 5000");
});

