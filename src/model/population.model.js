require('dotenv').config();
const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  port: process.env.DB_PORT
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Conected!")
  } catch(err) {
    console.error("Fail to connect :(", err)
  }
}

testConnection();

class Paises extends Model {}

Paises.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    pais: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    poblacion: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Paises',
  },
);

module.exports = Paises;