const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const produtosRoutes = require("./routes/produtos");
const sequelize = require("./config/database");

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Rate limit
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);

// Rotas
app.use("/api/produtos", produtosRoutes);

// Teste de conexão
sequelize
  .authenticate()
  .then(() => console.log("Banco de dados conectado com sucesso"))
  .catch((err) => console.error("Erro ao conectar no banco:", err));

module.exports = app;
