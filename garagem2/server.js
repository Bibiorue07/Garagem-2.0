// Importação das bibliotecas
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Configuração Body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Importação das rotas
const path = require("path");
const veiculoRoute = require("./src/routes/veiculo");

// Configuração do host
const port = 8080;
const hostname = "127.0.0.1";

// Configuração de rotas
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/pages/index.html"));
});

app.use("/veiculo", veiculoRoute);

// Hospedagem do servidor
app.listen(
  port,
  hostname,
  console.log(`Servidor rodando...`)
);