require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const app = express();

// --- CONFIGURACIÓN DE MIDDLEWARES ---

// Configuración de CORS dinámica
// Permitimos el puerto 5173 (Vite) y activamos credentials para el manejo de tokens/cookies
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use('/api/admin', adminRoutes);
// --- CONEXIÓN A BASE DE DATOS ---

// Verificación de URI de MongoDB
if (!process.env.MONGO_URI) {
  console.error('❌ ERROR: MONGO_URI no definida en el archivo .env');
  process.exit(1);
}

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🚀 Aura DB Conectada con éxito'))
  .catch(err => {
    console.error('❌ Error crítico al conectar a la DB:', err.message);
  });

// --- RUTAS ---

app.use('/api/auth', authRoutes);

app.get('/health', (req, res) => res.send('Aura API Operativa 🟢'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`💻 Servidor Aura corriendo en: http://localhost:${PORT}`);
  console.log(`📡 Endpoint de autenticación: http://localhost:${PORT}/api/auth/google`);
});