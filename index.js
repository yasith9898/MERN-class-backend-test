import express from "express";
import bodyParser from "body-parser";
import userRoute from "./routes/usersRoute.js"; // adjust path as needed
import mongoose from "mongoose";

const app = express();
app.use(bodyParser.json());

const  connectionString = "mongodb+srv://tester:123@cluster0.tr0sfxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(connectionString).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB", err);
});
app.use("/api/users", userRoute);

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
