const express = require('express');
const authRouter =  require('./routes/auth');
const server = express();


server.use("/auth", authRouter); // auth router es el metodo que manda el contenido de lo que se quiere hacer

server.listen(8080);