var express = require('express');
var router = express.Router();
const sequelize = require("../sequelize")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', async function(req,res,next){
  let games = await getGames();
  console.log("games JSON:",games)
  res.json(games);
})

async function getGames() {
  let games = await sequelize.models.Game.findAll()
  console.log("Games:", games)
  return games
}

module.exports = router;
