import mongoose from 'mongoose'
import { URI, DB_CONFIG } from '../utils/config'

export const ApplicationRun = async(): Promise<any> => {
    console.log(`server running on port ${process.env.PORT}`)
    const connection = await mongoose.connect(URI, DB_CONFIG)
    //return connection
}