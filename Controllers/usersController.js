const db = require('../database/models')
const product = db.Product
const user = db.User
const comentario = db.Comentario
const op = db.Sequelize.Op
const bcrypt = require('bcryptjs') 

let controller = {
    login: function (req, res){
        res.render('login')
    },
    register: function (req, res){
        res.render('register')
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
            .then(() => res.redirect('/users'))
            .catch( error => console.log(error))    
    },
    processLogin: (req, res) => {
        db.User.findOne({
            where: [{ email: req.body.email }]
        })
        .then(user => {
            req.session.user = user
            if(req.body.recordame){
                res.cookie('user_id', user.id, {maxAge: 1000 * 60 * 10}) //chequear si es user.id
            }
            return res.redirect('/')
        })
        .catch( error => console.log(error))
    },
    logout: (req, res) => {
        req.session.destroy()
        res.clearCookie('user_id')
        return res.redirect('/')
    },
}



module.exports = controller;