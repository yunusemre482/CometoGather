const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.set("debug", true);
const PORT = process.env.PORT || 4000;

const dotenv = require("dotenv");
const app = express();

dotenv.config();
//connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB");
  }
);

const authRoutes = require("./routes/authRoutes");
const clubRoutes = require("./routes/clubRoutes");
const subclubRoutes = require("./routes/subClubRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth/", authRoutes);
app.use("/api/club/", clubRoutes);
app.use("/api/subclub/", subclubRoutes);


var server = http.createServer(app);
var io = require("socket.io")(server);

server.listen(PORT, () => {
  // Bizim kurduğumuz server yapısının kapısının ismini bir üst satırda söylediğimiz porttan dinlemesini söylüyoruz.
  console.log("Server is listening on:" + PORT + " now..."); // Dinlediğinin kanıtı olarak ekrana yazdırıyoruz.
});
