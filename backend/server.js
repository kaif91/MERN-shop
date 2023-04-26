import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import productRoute from "./routes/productRoute.js";

dotenv.config();
connectDB();

const app = express();
app.use("/api/products", productRoute);

const port = process.env.PORT || 5000;
app.listen(
  port,
  console.log(`server started ${port} and ${process.env.NODE_ENV} mode`)
);
