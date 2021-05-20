/* const db = require('../database/models')
const op = db.Sequelize.Op
const bcrypt = require('bcryptjs')

module.exports = {
    register: (req, res) => {
        res.render('register')
    },
    store: (req, res) => {
        let user = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        }
        db.User.create(user)
        .then(user => {
            res.redirect('/')
        })
    },
    login: (req, res) => {
        res.render('login')
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
    logout: (req, res) => {
        req.session.destroy()
        res.clearCookie('userId')

        return res.redirect('/')
    }
} */