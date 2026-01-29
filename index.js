const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const taskRoutes = require("./routes/tasks.route");

const app = express();
app.use(express.json());

app.use(taskRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(5000, () => {
  console.log(`Server started on port 5000!`);
});
