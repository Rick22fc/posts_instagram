import express from 'express'
import {instagramRoutes} from './Routes/post.routes.js'

const port = 3000
const app = express 

app.use(express.json())
app.use("/",instagramRoutes)

app.listen(port,()=>{
    console.log(`API rodando em: http:localhost:${port}`)
})