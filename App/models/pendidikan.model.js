const { Sequelize, DataTypes } = require("sequelize");

 module.exports = (Sequelize, DataTypes)=>{
    const pendidikan = Sequelize.define("pendidikan ",{
        id:{
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull : false,
            primaryKey: true
         },
         SD:{
             type: DataTypes.STRING(50),
             allowNull: true
         },
         nama_SD:{
            autoIncrement: false,
            type: DataTypes.TEXT,
            allowNull : false,
            primaryKey: false
         },
    },{
        Sequelize,
        tableName : 'pendidikan',
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
    return pendidikan;
}