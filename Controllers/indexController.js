let db = require("../database/models")
const product = db.Product
const user = db.User
const comentario = db.Comentario
const op = db.Sequelize.Op
const bcrypt = require('bcryptjs') 

let controller = {
    index: (req, res)=>{
        product.findAll({
            include: [{association: 'comentario'}, {association: 'user'}],
            order: [[`created_at`, `DESC`]]
        })
            .then((resultados)=> res.render('index', { resultados }))
            .catch((err)=> `Error: ${err}`)
    },
    
    search: (req, res)=>{
        let searchData = req.query.search;
        product.findAll({
            where: [
                { modelo: {[op.like]: `%${searchData}%`}},
                { descripcion: {[op.like]: `%${searchData}%`}}
            ],
            include: [{association: 'comentario'}, {association: 'user'}],
        })
            .then(resultados => res.render('search-results', { resultados }))
            .catch(err=> console.log(err))
        
    },
}

module.exports = controller;