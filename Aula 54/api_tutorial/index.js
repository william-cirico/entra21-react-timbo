const { response, request } = require("express");
const express = require("express");
const app = express();
const PORT = 3000;

// Rotas da raiz "/"
app.get("/", (request, response) => {    
    response.send("Hello World");
});

app.post("/", (request, response) => {
    response.send("Método POST");
});

app.put("/", (request, response) => {
    response.send("Método PUT");
});

app.delete("/", (request, response) => {
    response.send("Método DELETE");
});

// Banco de dados
const users = [
    { id: 1, name: "Pedro", email: "pedro@email.com" },
    { id: 2, name: "João", email: "joao@email.com" },
    { id: 3, name: "Marcos", email: "marcos@email.com" },
];

// Rotas de usuário "/users"
app.get("/users", (req, res) => {
    res.json(users);
});

app.get("/users/:id", (req, res) => {
    const userId = req.params.id;

    const user = users.find(user => user.id == userId);

    if (!user) {
        res.status(404).json({ message: "User not found!" });
    }

    res.json(user);
});

app.get("/users", (req, res) => {
    
});

app.get("/users", (req, res) => {
    
});

app.get("/users", (req, res) => {
    
});

app.listen(PORT, () => console.log("O servidor está rodando..."));
