import cors from "cors";
import express from "express";
import { db } from "../../../databases/db/src/index";
import { user4 } from "../../../databases/db/src/schema/user4";
import { user2 } from "../../../databases/db/src/schema/user2";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", async (_, res) => {
  try {
    const result = await db.select().from(user4);
    res.send(JSON.stringify(result));
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(3005, () => console.log(`Server ready at: http://localhost:3005`));
