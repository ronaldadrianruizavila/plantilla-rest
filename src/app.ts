import Server from './server'
import {API} from "./routes/api";
import {WEB} from "./routes/web";

import { PORT,PUBLICFILES } from './env';
import { configMiddleware } from './config/middleware'
import express from 'express';


const server = Server.instance;
const app = server.aplication

/*CONFIG MIDDLEWARES*/
configMiddleware(app);

//Rutas
app.use('/api',API);
app.use(WEB);

//static file

app.use('/public',express.static(PUBLICFILES));


/*FIN DE MIDDLEWARE*/


//startAplication
server.start(() => {
    console.log(`Servidor corriendo ${PORT}`)
});
