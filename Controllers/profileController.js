const db = require('../database/models')
const product = db.Product
const user = db.User
const comentario = db.Comentario
const op = db.Sequelize.Op
const bcrypt = require('bcryptjs') 

let controller = {
    index: function (req, res){
        res.render('profile', {user, product})
    },
    show: function (req, res){
        res.render('profile-edit', {user})
    }
}

module.exports = controller;