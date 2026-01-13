require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB Aura
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🚀 Aura DB Conectada'))
  .catch(err => console.error('Error DB:', err));

// Rutas
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`💻 Servidor Aura en puerto ${PORT}`));