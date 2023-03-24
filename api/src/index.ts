import path from 'node:path';
import express from "express";
import mongoose from "mongoose";
import { router } from "./router";

mongoose.connect("mongodb://localhost:27017")
  .then(() => {
    const server = express();
    const PORT = 3001;

    server.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
    server.use(express.json())
    server.use(router);

    server.listen(PORT, () => {
      console.log(`Server is running at PORT ${PORT}`);
    });
  })
  .catch(() => console.log("Error: Mongo not connected"));
