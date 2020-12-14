import express, { Express } from "express";
import path from "path";
import cors from "cors";
import itemsRouter from "./routes";

const app: Express = express();

const PORT: string | number = process.env.PORT || 7000;

app.use(cors());
app.use(express.static("./build"));
app.use(itemsRouter);

app.get("/", function (req, res) {
  res.sendFile(path.join("./build", "index.html"));
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
