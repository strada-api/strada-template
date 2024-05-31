import cors from "cors";
import express from "express";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", async (_, res) => {
  try {
    res.send("Hello world!");
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(3005, () => console.log(`Server ready at: http://localhost:3005`));
