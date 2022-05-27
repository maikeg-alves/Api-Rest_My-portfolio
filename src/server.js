import express from 'express';
import {router} from './routes.js'
import cors from 'cors'

const app = express();

app.use(express.json())

app.use(cors()) //habilita a comunição da aplicação com o server

app.use(router);


const PORT = process.env.PORT || 3333

app.listen(PORT, ()=> console.log(`servidor online na porta ${PORT} ✅✅⚠️`))