const router = require("express").Router();
const studentsControllers = require("../controllers/studentsControllers");
const authentication = require("../middlewares/authMiddleware");

router.get("/:id/classes", authentication(["student", "teacher"]), studentsControllers.getClasses);

module.exports = router;