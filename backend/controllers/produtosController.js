const Produto = require("../models/Produto");

exports.getProdutosAtivos = async (req, res) => {
  try {
    const produtos = await Produto.findAll({ where: { ativo: true } });
    res.json(produtos);
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
};
