const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const auths = require("./Routes/auths");
const accomodations = require("./Routes/accomodations");
const users = require("./Routes/users");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/auths", auths);
app.use("/api/accomodations", accomodations);
app.use("/api/users", users);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Successfully connected to mongoDB"))
  .catch((error) => console.log(error));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend Server listening on port ${PORT} using express`);
});
