const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("type", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
      autoIncrement: true,
    },
    tipo: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
  });
};
