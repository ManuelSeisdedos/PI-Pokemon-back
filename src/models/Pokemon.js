const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      foreignKey: true,
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.TEXT,
      defaultValue: "../images/unknown.png.png",
    },
    vida: {
      type: DataTypes.INTEGER,
      defaultValue: Math.floor(Math.random() * 100),
    },
    ataque: {
      type: DataTypes.INTEGER,
      defaultValue: Math.floor(Math.random() * 100),
    },
    defensa: {
      type: DataTypes.INTEGER,
      defaultValue: Math.floor(Math.random() * 100),
    },
    velocidad: {
      type: DataTypes.INTEGER,
      defaultValue: Math.floor(Math.random() * 100),
    },
    altura: {
      type: DataTypes.FLOAT,
      defaultValue: Math.random() * 100,
    },
    peso: {
      type: DataTypes.FLOAT,
      defaultValue: Math.random() * 100,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};
