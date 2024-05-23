const express = require('express')
const router = express.Router()

const DepartamentoController = require('../controllers/DepartamentoController')

const { validarID } = require('../validators/IdValidadator')

const { validarDepartamento } = require('../validators/DepartamentoValidator')


router.get('/departamentos', DepartamentoController.buscarTodos)
router.get('/departamentos/:id', validarID, DepartamentoController.buscarPorID)
router.post('/departamentos', validarDepartamento, DepartamentoController.criar)
router.put('/departamentos/:id', validarID, validarDepartamento, DepartamentoController.atualizar)
router.delete('/departamentos/:id', validarID, DepartamentoController.excluir)




module.exports = router