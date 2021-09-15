const router = require("express").Router();

router.post("/login", require("../controllers/authControllers").login);

module.exports = router;