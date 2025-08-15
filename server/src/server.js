import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { connectDB } from './db/connect.js';
import itemRoutes from './routes/itemRoutes.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';

const app = express();

// CORS for Vite dev and any future origins
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: false
}));

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => res.json({ status: 'OK', service: 'Project2 API' }));
app.use('/api/items', itemRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

connectDB(process.env.MONGODB_URI, process.env.DB_NAME)
  .then(() => app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`)))
  .catch((e) => {
    console.error('DB connection failed', e);
    process.exit(1);
  });