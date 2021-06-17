let db = require("../database/models")
const product = db.Product
const user = db.User
const comentario = db.Comentario
const op = db.Sequelize.Op
const bcrypt = require('bcryptjs') 

let controller = {
    index: (req, res)=>{
        product.findAll()
            .then((resultados)=> res.render('index', { resultados }))
            .catch((err)=> `Error: ${err}`)
    },
        
}

module.exports = controller;