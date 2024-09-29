//mulai kembali dari index models
const dbConfig = require("../config/project.db.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize (dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    
host: dbConfig.HOST,
dialect: dbConfig.dialect,
operatorsAliases: false,
});
// membuat module 
const db = {};
// sequelize
db.Sequelize = sequelize;
db.sequelize = sequelize;
// model
db.pendidikan = require("./pendidikan.model.js")(sequelize, Sequelize);
db.pengalaman = require("./pengalaman.model.js")(sequelize, Sequelize);
db.contact = require("./contact.model.js")(sequelize, Sequelize);
db.skill = require("./skill.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.biodata = require("./biodata.model.js")(sequelize, Sequelize);

module.exports = db; 