const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogs=require('./routerDog.js');
const temperaments=require('./routerTemperament.js');

const router = Router();

// Configurar los routers
router.use("/dogs",dogs);
router.use("/temperaments",temperaments);

module.exports = router;