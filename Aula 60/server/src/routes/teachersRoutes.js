const router = require("express").Router();
const teachersControllers = require("../controllers/teachersControllers");
const authentication = require("../middlewares/authMiddleware");

router.post("/", authentication(["admin"]), teachersControllers.createTeacher);
router.get("/classes", authentication(["teacher"]), teachersControllers.getClasses);

module.exports = router;