API REST pronta para o consumo de dados
Para subir o projeto no ar, copie o arquivo .env_example para .env.

Execute os comandos abaixo:

npm i
npx sequelize db:migrate
npm run dev
Neste ponto sua API deverá está rodando em http://localhost:3000/tools.

Configurações MySQL/MariaDB:

require('dotenv').config();

module.exports = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',

  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};

