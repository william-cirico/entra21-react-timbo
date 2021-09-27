const router = require("express").Router();
const multer = require("multer");
const multerConfig = require("../config/multer");

const authentication = require("../middlewares/authMiddleware");
const usersControllers = require("../controllers/usersControllers");

router.get("/", authentication, usersControllers.getUser);
router.post("/", multer(multerConfig).single("avatar"), usersControllers.createUser);

module.exports = router;