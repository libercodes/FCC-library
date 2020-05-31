import express, { Application } from 'express'
import dotenv from 'dotenv'
import { ApplicationRun } from './controller/System'
import userRouter from './routes/user'
import cors from 'cors'
import bodyParser from 'body-parser'
import helmet from 'helmet'
dotenv.config()

const app: Application = express()
app.use(cors({origin: '*'})); 
app.use(helmet())
//app.use(crossOriginMiddleware)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', userRouter)
app.use('/', (req, res, next) => {
    res.sendFile(__dirname + '/view/index.html')
})

app.listen(process.env.PORT, ApplicationRun) 