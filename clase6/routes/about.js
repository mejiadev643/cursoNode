
import express from 'express';
import controller from '../controllers/about.js';//En este momento esta dentro de views/auth, por lo que se necesita salir y entrar a la carpeta correspondiente


const Router = express.Router()

Router.get('/', controller.renderAbout);// le pide mandar el archivo html que en este caso es auth.js en controllers.
//2. renderAuth hace referencia al metodo exports.renderAuth de auth.js en controllers



export default Router;