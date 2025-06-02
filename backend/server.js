const app = require("./app");
const sequelize = require("./config/database");

const PORT = process.env.PORT || 3001;

// Sincronizar modelos e iniciar o servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
