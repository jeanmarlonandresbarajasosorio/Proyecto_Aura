const Juzgado = require('../models/Juzgado');

exports.getJuzgados = async (req, res) => {
  try {
    const juzgados = await Juzgado.find().sort({ nombre: 1 });
    res.json(juzgados);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener juzgados' });
  }
};

exports.crearJuzgado = async (req, res) => {
  try {
    const { nombre } = req.body;
    
    const existe = await Juzgado.findOne({ nombre });
    if (existe) return res.status(400).json({ message: 'Ese juzgado ya está registrado' });

    const nuevoJuzgado = new Juzgado({ nombre });
    await nuevoJuzgado.save();
    
    res.status(201).json(nuevoJuzgado);
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar el juzgado' });
  }
};

exports.actualizarJuzgado = async (req, res) => {
  try {
    const { nombre } = req.body;
    const juzgado = await Juzgado.findByIdAndUpdate(
      req.params.id, 
      { nombre }, 
      { new: true, runValidators: true }
    );

    if (!juzgado) return res.status(404).json({ message: 'Juzgado no encontrado' });
    
    res.json(juzgado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el juzgado' });
  }
};