const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./App/models');

const app = express()
const port = 3002

app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes

// Database connection
db.sequelize.sync().then(() => {
  console.log('Database connected.');
}).catch((error) => {
  console.log('Error connecting to the database:', error);
});

db.sequelize.sync()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/test', (req, res) => {
  res.send('Hello World!')

//routes
const data ={
"name":"Kelompok 3",
"message" : "App Started"
}

//logging
res.json(data);
console.log(data.name);
console.error("Error")

})

require("./App/routes/pendidikan.routes")(app)
require("./App/routes/pengalaman.routes")(app)
require("./App/routes/contact.routes")(app)
require("./App/routes/skill.routes")(app)
require("./App/routes/user.routes")(app)
require("./App/routes/biodata.routes")(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})