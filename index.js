const express = require('express');
const cors    = require('cors');

const petsRouter   = require('./routes/pets');
const plantsRouter = require('./routes/plants');

const app  = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/pets',   petsRouter);
app.use('/api/plants', plantsRouter);

// Status general
app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Backend corriendo en puerto ${PORT}`);
});
