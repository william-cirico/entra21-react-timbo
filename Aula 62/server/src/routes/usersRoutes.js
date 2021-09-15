const router = require("express").Router();

router.post("/", require("../controllers/usersControllers").createUser)

module.exports = router;