const express = require('express');
const router = express.Router();
const patitosControllers = require("../Controllers/patitosControllers");
const { body } = require('express-validator');

// Validaciones para agregar producto
let validationsAdd = [
    body('product')
        .notEmpty().withMessage('Este campo es obligatorio.'),
    body('descripcion') // Ajustado: coincidir con el nombre correcto del campo
        .notEmpty().withMessage('Es obligatoria una descripción.'),
    body('image')
        .notEmpty().withMessage('Se necesita una imagen del producto.').bail()
        .isURL().withMessage('La imagen debe ser una URL válida.')
];

// Rutas
router.get('/', patitosControllers.patitos); // Ruta para mostrar todos los productos
router.get('/add-product', patitosControllers.add); // Ruta para mostrar el formulario de agregar producto
router.post('/add-product', validationsAdd, patitosControllers.store); // Ruta para procesar el formulario de agregar producto

router.get('/id/:idPatitos', patitosControllers.detalle); // Ruta para mostrar detalles de un producto específico

module.exports = router;
