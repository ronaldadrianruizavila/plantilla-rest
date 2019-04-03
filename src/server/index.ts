import { configServer } from '../env';
import express,{Application} from 'express';


export default class Server {
    private app: Application;
    private port: number;

    constructor(){
     this.app = express();
     this.port = Number(configServer.PORT);
    }
    start(callback: Function){
        this.app.listen(this.port, callback);
    }

    get aplication(){
        return this.app;
    }

}