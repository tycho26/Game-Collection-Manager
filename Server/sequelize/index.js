const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('games', 'root', '1234', {
    host: 'DB',
    dialect: 'mariadb',
    port:'3306'
  });

const models = [
  require("./models/Game")
]

for (const Model of models){
  Model(sequelize);
}

sequelize.sync({force: true})

async function AuthDB(){
    console.log("test")
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

AuthDB();

module.exports = sequelize;