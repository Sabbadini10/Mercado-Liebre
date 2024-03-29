const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/avatar/')
    },
    filename: function (req, file, cb) {
      let filename = `avatar-${Date.now()}${path.extname(file.originalname)}`;
      cb(null, filename)
    }
  })

  const uploadAvatar = multer({ 
      storage
  })


  module.exports = {
    uploadAvatar
  }