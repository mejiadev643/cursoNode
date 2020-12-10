exports.renderBlog = (req, res) => {
    res.sendFile(process.cwd() + "/views/blog.html");//se envia el archivo y se toma toda la ruta desde donde se inicio el servidor

  }
