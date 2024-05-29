
import express, {  Request, Response } from 'express'
import cors from 'cors'
import { globalErrorHandler } from './app/middleware/globalErrorHandler'
import { notFound } from './app/middleware/notFound'
import router from './app/routes'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/v1/',router)

app.get('/',(req:Request,res:Response)=>{
    
    console.log("PH University Backend")
    res.status(200).json({
        success:true,
        message:"Server Connected",
        data:"Server Running"
    })
})
// Global error handler 
app.use(globalErrorHandler)
app.use(notFound)

export default app


