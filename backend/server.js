const express = require("express");
const app = express();
const port = 3000;

const apiRoutes = require("./routes/apiRoutes");

app.get("/", (req, res) => {
  console.log("sync code");
  throw new Error("some error occured");
  res.json({ message: "Api Running" });
});

// mongodb connection
const connectDB = require("./config/db");
connectDB();

// app.get("/a", (req, res, next) => {
//   setTimeout(() => {
//     try {
//       aconsole.log("Async code");
//     } catch (error) {
//       next(error);
//     }
//   }, 1000);
//   //   next(new Error("some error occured"));
// });

app.use("/api", apiRoutes);

app.use((error, req, res, next) => {
  console.error(error);
  next(error);
});

app.use((error, req, res, next) => {
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
