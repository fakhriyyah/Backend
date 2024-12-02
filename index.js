import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const port = process.env.APP_PORT;

app.use(cors());
app.use(bodyParser.json());

app.use("/");

app.get("/", (req, res) => {
  res.send(`server berjalan di ${port}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
