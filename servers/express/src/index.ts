import cors from "cors";
import express from "express";
import { db } from "../../../databases/db/src/index";
import { user7 } from "../../../databases/db/src/schema/user7";
import { user6 } from "../../../databases/db/src/schema/user6";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", async (_, res) => {
  try {
    const result = await db.select().from(user7);
    res.send(JSON.stringify(result));
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(3005, () => console.log(`Server ready at: http://localhost:3005`));
