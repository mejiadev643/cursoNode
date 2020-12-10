const express = require('express');
//const { patch } = require('./routes/auth');
const authRouter =  require('./routes/auth');
const path = require('path');
const homeRouter =  require('./routes/home');
const blogRouter =  require('./routes/blog');
const contactRouter =  require('./routes/contact');
const aboutRouter =  require('./routes/about');

const server = express();

server.use(express.static(path.join(__dirname, 'public')));
server.use("/auth", authRouter); // auth router es el metodo que manda el contenido de lo que se quiere hacer
server.use("/", homeRouter);
server.use("/about", aboutRouter);
server.use("/blog", blogRouter);
server.use("/contact", contactRouter);
server.listen(8080);