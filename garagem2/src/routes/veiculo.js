// Importação das bibliotecas
const express = require("express");
const route = express.Router();

// Configuração de rotas
route.post("/", (req, res) => {
  const NovoVeiculo = {
    nome: req.body.nome,
    fabricante: req.body.fabricante,
    ano: req.body.ano,
    combustivel: req.body.combustivel,
    cor: req.body.cor,
    preco: req.body.preco,
  };

  res.status(200).send({
    mensagem: "Veículo cadastrado!",
    dadosNovoVeiculo: NovoVeiculo,
  });
});

route.put("/", (req, res) => {
  const { id, preco } = req.body;
  res.status(200).send("Dados atualizados.");
});

route.delete("/", (req, res) => {
  const { id } = req.body;
  res.status(200).send(`O veículo ${id} foi excluído.`);
});

// Exportação das rotas
module.exports = route;