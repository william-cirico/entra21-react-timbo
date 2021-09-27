const multer = require("multer");
const path = require("path");
const { randomBytes } = require("crypto");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");

const storages = {
    local: multer.diskStorage({
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
    }),
    s3: multerS3({
        s3: new aws.S3(),
        bucket: process.env.BUCKET_NAME,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: "public-read",
        key: (req, file, cb) => {
            randomBytes(16, (err, hash) => {
                if (err) cb(err);

                const fileName = `${hash.toString("hex")}-${file.originalname}`;

                cb(null, fileName);
            });
        }
    })
}

module.exports = {         
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            "image/png",
            "image/jpg",
            "image/jpeg"
        ];

        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Invalid file type"));
        }
    },
    storage: storages[process.env.STORAGE_TYPE]
};