const router = require("express").Router();
const multer = require("multer");
const multerConfig = require("../config/multer");

router.post("/", multer(multerConfig).single("avatar"), require("../controllers/usersControllers").createUser);

module.exports = router;