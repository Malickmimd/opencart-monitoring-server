import express, { Request, Response } from "express";
import dotenv from "dotenv";
import AppRoute from "./routes";
import { connectDB } from "./config/dbConfig";
import cors from 'cors';
import helmet from 'helmet'

// configures dotenv to work in your application
dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(cors())
app.use('/', AppRoute)
app.use((req: Request, res: Response, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

connectDB()

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  throw new Error(error.message);
});
