const router = require("express").Router();

const todosControllers = require("../controllers/todosControllers");
const authentication = require("../middlewares/authMiddleware");

router.get("/", authentication, todosControllers.getTodos);
router.post("/", authentication, todosControllers.createTodo);
router.put("/:id", authentication, todosControllers.editTodo);
router.put("/:id/toggle", authentication, todosControllers.toggleTodo);
router.delete("/:id", authentication, todosControllers.removeTodo);

module.exports = router;