const router = require("express").Router();
const classesControllers = require("../controllers/classesControllers");
const authentication = require("../middlewares/authMiddleware");

router.post("/", authentication(["admin"]), classesControllers.createClass);
router.delete("/:id", authentication(["admin"]), classesControllers.removeClass);

module.exports = router;