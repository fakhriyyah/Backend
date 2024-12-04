import express from "express";
import dotenv from "dotenv";
import backendRoutes from "./routes/backendRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use(backendRoutes);

const PORT = process.env.APP_PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});