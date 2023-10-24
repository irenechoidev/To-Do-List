const { v4 } = require('uuid');
const multer = require('multer');
const path = require('path');

const IMAGE_KEY = "image";

exports.createUpload = () => {
    const destination = path.join(__dirname, '../', 'public');
    const storage = multer.diskStorage({
        destination,
        filename: (_, file, cb) => {
            const extension = path.extname(file.originalname); // ".jpg"
            const prefix = v4(); // "1224343424"

            const filename = prefix + extension; // "1224343424.jpg"

            cb(null, filename);
        }
    });

    // const upload = multer({ storage: storage }).single(IMAGE_KEY);
    const upload = multer({ storage }).single(IMAGE_KEY);
    return upload;
}