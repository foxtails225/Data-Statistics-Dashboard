import express, { Express } from "express";
import cors from "cors";
import itemsRouter from "./routes";

const app: Express = express();

const PORT: string | number = process.env.PORT || 7000;

app.use(cors());
app.use(itemsRouter);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
