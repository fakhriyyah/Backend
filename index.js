import express from "express";
import dotenv from "dotenv";
import backendRoutes from "./routes/backendRoutes.js";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", backendRoutes);

const PORT = process.env.APP_PORT;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
