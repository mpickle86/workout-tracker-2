const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const userRouter = require("./routes/userRouter");
const workoutRouter = require("./routes/workoutRouter");
const weightRouter = require("./routes/weightRouter");

const app = express();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

app.use(express.static(path.join(__dirname, "client/build")));
app.use("/user", userRouter);
app.use("/workout", workoutRouter);
app.use("/weight", weightRouter);

mongoose.connect(
DATABASE_URL,
  		{useNewUrlParser: true, useUnifiedTopology: true} 
).catch(error => console.error("MongoDB connection error: " + error.message));
mongoose.connection.on("connected", () => console.log(`connected to MongoDB`));

app.listen(PORT, () => {
console.log(`server is running at port ${PORT}`);
});
