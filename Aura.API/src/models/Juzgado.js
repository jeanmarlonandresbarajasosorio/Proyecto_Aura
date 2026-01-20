const mongoose = require('mongoose');

const JuzgadoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre del juzgado es obligatorio'],
    trim: true,
    unique: true 
  },
  estado: {
    type: Boolean,
    default: true 
  }
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Juzgado', JuzgadoSchema);