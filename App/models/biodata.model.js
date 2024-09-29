const { Sequelize, DataTypes } = require("sequelize");

 module.exports = (Sequelize, DataTypes)=>{
    const biodata = Sequelize.define("biodata ",{
        id:{
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull : false,
            primaryKey: true
         },
         nama: {
            type: DataTypes.STRING(50),
            allowNull: true
  
          },

          alamat: {
            autoIncrement: false,
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: false
  
          },
  
  
          email: {
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: false,
            primaryKey: false
  
          },
  
          no_hp : {
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: false,
            primaryKey: false
          },
    },{
        Sequelize,
        tableName : 'biodata',
        timestamps: true,
        indexes: [
            {
              name:  "PRIMARY",
              unique: true,
              using: "BTREE",
              fields: [
                {name: "id"},    
              ]
            },
        ],
    
})
    return biodata;
}