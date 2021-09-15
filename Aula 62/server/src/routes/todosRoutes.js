const router = require("express").Router();

const todosControllers = require("../controllers/")

router.get("/")
router.post("/", require("../controllers/authControllers").login);

module.exports = router;