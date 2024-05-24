import cors from "cors";
import express from "express";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", async (_, res) => {
  try {
    // const result = await db.select().from(user);
    // res.send(JSON.stringify(result));
    res.send(process.env.SCRT_NAME);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(3005, () => console.log(`Server ready at: http://localhost:3005`));
