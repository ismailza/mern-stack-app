import express from 'express';
import cors from 'cors';
import env from 'dotenv';

import { router as web } from '../routes/route.js';
import { router as api } from '../routes/api.js';

import connectDatabase from '../config/database.js';

env.config();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', web);
app.use('/api/', api);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


connectDatabase();
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});