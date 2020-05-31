import express, { Router } from 'express'
import * as userController from '../controller/user'

const router: Router = express.Router()

router.get('/books/:id', userController.ObtenerLibro)
router.get('/books', userController.ListarLibros)
router.post('/books/:id', userController.AgregarComentario)
router.post('/books', userController.AgregarLibro)
router.delete('/books/:_id', userController.EliminarLibro)
router.delete('/books', userController.EliminarTodosLosLibros)



export default router