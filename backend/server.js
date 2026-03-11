const express = require("express");
const cors = require("cors");


const linkedinAuth = require("./routes/linkedinAuth");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", linkedinAuth);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});