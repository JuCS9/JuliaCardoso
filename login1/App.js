const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'julia',
    password: 'SENAI123',
    database: 'login'
});

db.connect((error) => {
    if (error) {
        console.log("Erro ao conectar com o banco de dados");
    } else {
        console.log("Conectado ao MySQL");
    }
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post("/login", (req, res) => {
    const username = req.body.usuario;
    const password = req.body.senha;

    db.query('SELECT password FROM user WHERE username = ?', [username], (error, results) => {
        if (error) {
            console.log("Erro na consulta ao banco de dados:", error);
            res.status(500).send("Erro interno do servidor");
        } else if (results.length > 0) {
            const passwordBD = results[0].password;
            if (password === passwordBD) {
                console.log("Login bem-sucedido!");
                res.send("Login bem-sucedido!");
            } else {
                console.log("Senha incorreta!");
                res.send("Senha incorreta!");
            }
        } else {
            console.log("Usuário não cadastrado!");
            res.send("Usuário não cadastrado!");
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`);
});