const mongoose = require('mongoose');

const AccionadoSchema = new mongoose.Schema({
    codigo: { type: String, required: true, unique: true, uppercase: true },
    nombre: { type: String, required: true },
    estado: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Accionado', AccionadoSchema);