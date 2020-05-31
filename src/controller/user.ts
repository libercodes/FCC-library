import { RequestHandler} from 'express'
import Book, { IBook } from '../model/Book'

export const ListarLibros:RequestHandler = async(req, res, next) => {
    try {
        const books: IBook[] = await Book.find()
        res.json(books)
    } catch (error) {
        res.json([])
    }
}

export const ObtenerLibro:RequestHandler = async(req, res, next) => {
    const id: any = req.params.id
    try {
        const foundBook = await Book.findById(id)
        if(foundBook){
            res.json(foundBook)
        } else {
            res.send('no book exists')
        }
    } catch (error) {
        
    }
}

export const AgregarLibro:RequestHandler = async(req, res, next) => {
    try {
        const { title } = req.body.title
        const objBook = new Book({ title: title })
        const savedBook: IBook = await objBook.save()
    
        res.json(savedBook)
    } catch (error) {
        
    }
}

export const AgregarComentario:RequestHandler = async(req, res, next) => {
    try {
        const id: any = req.params.id
        const comment = req.body.comment
        const foundBook = await Book.findById(id)
        if (foundBook) {
            foundBook.comments = [...foundBook.comments, comment]
            const updatedBook = await foundBook.save()
    
            res.json(updatedBook)
        } else {
            res.send('no book exists')
        }
    } catch (error) {
        
    }
}

export const EliminarLibro:RequestHandler = async(req, res, next) => {
    const id: any = req.params.id
    try {
        const deletedBook = await Book.findByIdAndDelete(id)
        if(deletedBook){
            res.send('delete successful')
        } else {
            res.send('no book exists')
        }
    } catch (error) {
        
    }
}
export const EliminarTodosLosLibros:RequestHandler = async(req, res, next) => {
    try {
        await Book.deleteMany({})
        res.send('complete delete successful')
    } catch (error) {
        
    }
}