// server/middlewares/multer.middleware.js

const multer = require('multer');

// Configure storage options for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './media/product_images'); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);   
    },
});

const upload = multer({ storage });

module.exports = upload;