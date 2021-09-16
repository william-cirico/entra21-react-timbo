const multer = require("multer");
const path = require("path");
const { randomBytes } = require("crypto");

module.exports = {         
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            "image/jpeg",
            "image/png",
            "image/gif"
        ];

        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Invalid file type"));
        }
    },
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, "..", "..", "uploads"));
        },
        filename: (req, file, cb) => {
            randomBytes(16, (err, buf) => {
                if (err) throw err;

                const fileName = `${buf.toString("hex")}-${file.originalname}`;

                cb(null, fileName);
            });
        }
    })    
};