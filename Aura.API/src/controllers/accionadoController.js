const Accionado = require('../models/Accionado');

exports.getAccionados = async (req, res) => {
    try {
        const accionados = await Accionado.find().sort({ createdAt: -1 });
        res.json(accionados);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener accionados" });
    }
};

exports.createAccionado = async (req, res) => {
    try {
        const { codigo, nombre } = req.body;
        const nuevo = new Accionado({ codigo, nombre });
        await nuevo.save();
        res.status(201).json(nuevo);
    } catch (error) {
        if (error.code === 11000) return res.status(400).json({ message: "El código ya existe" });
        res.status(500).json({ message: "Error al crear" });
    }
};

exports.updateAccionado = async (req, res) => {
    try {
        const actualizado = await Accionado.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(actualizado);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar" });
    }
};

exports.toggleEstado = async (req, res) => {
    try {
        const accionado = await Accionado.findById(req.params.id);
        if (!accionado) return res.status(404).json({ message: "No encontrado" });
        
        accionado.estado = !accionado.estado;
        await accionado.save();
        res.json(accionado);
    } catch (error) {
        res.status(500).json({ message: "Error al cambiar estado" });
    }
};