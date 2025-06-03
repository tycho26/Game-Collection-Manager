const {DataTypes} = require('sequelize');

function Game(sequelize){
    sequelize.define('Game',{
        gameID: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        gameTitle: {
            type: DataTypes.STRING
        },
        gameReleaseDate: {
            type: DataTypes.DATE,
        },
        gameDev: {
            type: DataTypes.STRING
        },
        gamePub: {
            type: DataTypes.STRING
        }
    })
}

module.exports = Game