const {Router} = require('express');
const Productos = require('./empleoyes')

const router = Router();

router.get('/empleados', Emleados.getEmleados);
router.post('/empleados', Emleados.createEmleados);
router.get('/empleados/:id', Emleados.getEmleadosById);
router.delete('/empleados/:id', Emleados.deleteEmleadosById);


module.exports =  router; 