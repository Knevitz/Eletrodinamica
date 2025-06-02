const express = require("express");
const router = express.Router();
const { getProdutosAtivos } = require("../controllers/produtosController");

router.get("/", getProdutosAtivos);

module.exports = router;
