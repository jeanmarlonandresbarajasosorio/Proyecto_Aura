const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { checkRole } = require('../middlewares/roleMiddleware'); 

// --- GESTIÓN DE USUARIOS ---
router.get('/usuarios', checkRole(['ADMIN']), adminController.getUsuarios);
router.put('/usuarios/:id', checkRole(['ADMIN']), adminController.updateUsuario);
router.delete('/usuarios/:id', checkRole(['ADMIN']), adminController.deleteUsuario);

// --- GESTIÓN DE JUZGADOS ---
router.get('/juzgados', checkRole(['ADMIN']), adminController.getJuzgados);
router.post('/juzgados', checkRole(['ADMIN']), adminController.crearJuzgado);
router.put('/juzgados/:id', checkRole(['ADMIN']), adminController.updateJuzgado);
router.patch('/juzgados/:id/estado', checkRole(['ADMIN']), adminController.toggleEstadoJuzgado);

// --- GESTIÓN DE ACCIONADOS ---
// Estas rutas resuelven el error 404 que aparecía en tu consola
router.get('/accionados', checkRole(['ADMIN']), adminController.getAccionados);
router.post('/accionados', checkRole(['ADMIN']), adminController.crearAccionado);
router.put('/accionados/:id', checkRole(['ADMIN']), adminController.updateAccionado);
router.patch('/accionados/:id/estado', checkRole(['ADMIN']), adminController.toggleEstadoAccionado);

module.exports = router;