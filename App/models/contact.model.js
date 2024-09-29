const { Sequelize, DataTypes } = require("sequelize");

 module.exports = (Sequelize, DataTypes)=>{
    const contact = Sequelize.define("contact ",{
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
  
          email: {
            autoIncrement: false,
            type: DataTypes.STRING(50),
            allowNull: false,
            primaryKey: false
  
          },
  
          pesan : {
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull: false,
            primaryKey: false
          },
    },{
        Sequelize,
        tableName : 'contact',
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
    return contact;
}