import mongoose, { Schema, Document }  from "mongoose";

export interface IBook extends Document{
    title: string,
    comments?: string[]
}

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    comments: {
        type: [String],
        default: []
    }
})

export default mongoose.model<IBook>('Book', BookSchema, 'books')