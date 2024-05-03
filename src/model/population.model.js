const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('test_db', 'root', '12345', {
  host: 'localhost',
  dialect: "mysql",
  port: 3306
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