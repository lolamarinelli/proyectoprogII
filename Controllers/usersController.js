// let profile = require('../data/profile')

const db = require('../database/models')
const op = db.Sequelize.Op
const bcrypt = require('bcryptjs')

let controller = {
    login: function (req, res){
        res.render('login', {'login': profile})
    },
    register: function (req, res){
    res.render('register', {'register': profile})
        },
    store: (req, res) => {
        let user = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            fecha: req.body.fecha,
            password: bcrypt.hashSync(req.body.password, 10)
        }
        db.User.create(user)
        .then(user => {
            res.redirect('/users')
        })
    },
    processLogin: (req, res) => {
        
        db.User.findOne({
            where: [{ email: req.body.email }]
        })
        .then(user => {
            req.session.user = user
            if(req.body.recordame){
                res.cookie('userId', user.id, {maxAge: 1000 * 60 * 10})
            }
            return res.redirect('/')
        })
        .catch( error => console.log(error))
    },







}



module.exports = controller;