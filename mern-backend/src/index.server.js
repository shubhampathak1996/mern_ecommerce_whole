const express = require("express");
const app = express();
const env = require("dotenv");
const bodyParser = require("body-parser");
env.config();
const mongoose = require("mongoose");
// routes
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");

// mongodb connection
// mongodb+srv://user-123:<password>@cluster0.p4fj6gd.mongodb.net/?retryWrites=true&w=majority
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.p4fj6gd.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Database connected");
  });
app.use(bodyParser());
app.use("/api", authRoutes);
app.use("/api", adminRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
