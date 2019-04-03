import Server from './server'
import {API} from "./routes/api";
import {json, urlencoded} from 'express';
import cors from 'cors'
import morgan from 'morgan';

let server  = new Server();

/*MIDDLEWARES*/
server.aplication.use(morgan('dev'));

//aceptar cors
server.aplication.use(cors());

//acceptar JSON
server.aplication.use(urlencoded({ extended: true }));
server.aplication.use(json());

//Rutas
server.aplication.use(API);

/*FIN DE MIDDLEWARE*/
//startAplication
server.start(()=>{
   console.log('Servidor corriendo 3000')
});