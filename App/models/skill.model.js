const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
  const skill = Sequelize.define(
    "skill ",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      nama_skill: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tingkat: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tahun_pengalaman: {
        type: DataTypes.STRING, 
        allowNull: false,
      },
    },
    {
      Sequelize,
      tableName: "skill",
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
      ],
    }
  );
  return skill;
};
