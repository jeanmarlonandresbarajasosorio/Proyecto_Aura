const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: { type: String, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  picture: String,
  role: { 
    type: String, 
    enum: ['ADMIN', 'TECNICO', 'LECTOR'], 
    default: 'LECTOR' 
  },
  // Añadimos los permisos granulares
  permisos: {
    tutelas: { type: Boolean, default: false },
    gestionDocumental: { type: Boolean, default: false },
    auditoria: { type: Boolean, default: false }
  },
  lastLogin: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);