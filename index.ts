import express, { Request, Response } from "express";
import dotenv from "dotenv";
import AppRoute from "./routes";
import { connectDB } from "./config/dbConfig";

// configures dotenv to work in your application
dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use('/', AppRoute)

connectDB()

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  throw new Error(error.message);
});
