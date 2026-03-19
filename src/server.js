import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(pino());

const PORT = process.env.PORT ?? 3000;

//маршрут, який буде повертати всі нотатки:
app.get('/notes', (req, res) => {
  res.status(200).json({ message: 'Retrieved all notes' });
});

//маршрут, який буде повертати одну нотатку за її ідентифікатором:
app.get('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  res.status(200).json({ message: `Retrieved note with ID: ${noteId}` });
});

app.get('/test-error', (req, res) => {
  throw new Error('Simulated server error');
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
