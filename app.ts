import Server from './server'
import express from 'express';
import path from 'path';

//Create new instance server and
const server = Server.instance;
const app = server.application;

app.use('/public',express.static(path.join(__dirname,'/public')));

//startAplication
server.start(() => {
    console.log(`Servidor corriendo  http://localhost:${process.env.PORT}`);
});