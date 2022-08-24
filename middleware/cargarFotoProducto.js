const multer = require('multer');
const path = require('path')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/images/productos');
    },
    filename: (req, file, cb) => {
      cb(null, `productos-${Date.now()}${path.extname(file.originalname)}`)
    }
  })

  
const uploadProductos = multer({ 
    storage
})


  module.exports = {
    uploadProductos
  }