const express = require("express");
const app = express();
const cors = require('cors');
const PORT = 8000;

require('dotenv').config(); 

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/image", express.static("./image"))

const router = require("./routes/indexRouter");
app.use("/", router);


app.listen(PORT, () => {
  console.log(`localhost:${PORT}`);
});
