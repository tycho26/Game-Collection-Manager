var express = require('express');
var router = express.Router();
const sequelize = require("../sequelize")

/* GET games listing. */
router.get('/', async function(req,res,next){
    let games = await sequelize.models.Game.findAll();
    console.log("games JSON:",games)
    res.json(games);
  })

router.get('/:gameid', async function(req,res,next){
    let games = await sequelize.models.Game.findByPk(req.params.gameid);
    console.log("games JSON:",games)
    res.json(games);
})

module.exports = router;
