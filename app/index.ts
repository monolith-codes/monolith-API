import express from 'express';
import { body, validationResult, matchedData } from 'express-validator';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const port = 8000;
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ['http://terpsmansion.com', 'https://terpsmansion.com'],
  }),
);

app.post('/terpsmansion/maintenancelogin', body('password').notEmpty(), (req, res) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    const data = matchedData(req);
    if (data.password === process.env.PROD_PASSWORD) {
      return res.status(200).send(true);
    } else {
      return res.status(406).send(false);
    }
  }

  res.send({ errors: result.array() });
});

app.get('/', (req, res) => {
  return res.send('ITS WORKING');
});

app.listen(port, () => {
  console.log('Monolith API listening on ' + port.toString());
});
