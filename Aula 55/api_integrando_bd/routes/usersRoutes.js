const express = require("express");
const router = express.Router();

// Importando o controller
const usersControllers = require("../controllers/usersControllers");

// Obter todos os usuários
router.get("/", usersControllers.getAllUsers);

// Obter um usuário em específico
router.get("/:id", usersControllers.getUserById);

// Criar um usuário
router.post("/", usersControllers.createUser);

// Atualizar as informações de um usuário
router.put("/:id", usersControllers.updateUser);

// Remover um usuário
router.delete("/:id", usersControllers.deleteUser);

module.exports = router;