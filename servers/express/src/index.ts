import cors from 'cors';
import express from 'express';
import { db } from '../../../databases/db/src/index';
import { _dummy } from '../../../databases/db/src/schema/_dummy';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/', async (_, res) => {
  try {
    const result = await db.select().from(_dummy);
    res.send(JSON.stringify(result));
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(3005, () => console.log(`Server ready at: http://localhost:3005`));
