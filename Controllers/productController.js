const db = require('../database/models')
const product = db.Product
const user = db.User
const comentarios = db.Comentario
const op = db.Sequelize.Op
const bcrypt = require('bcryptjs') 

let controller = {
    // index: (req, res)=>{
    //     res.render('index', {'producto':producto})
    // },
    show: (req, res)=>{
        let primaryKey = req.params.id;
        product.findByPk(primaryKey, {
            include: [{association: 'comentario'}, {association: 'user'}]
        })
            .then(resultados => res.render('product', {resultados}))
            .catch( err => console.log(err))
    },
    add: (req, res)=>{
        product.findByPk(primaryKey, {
            include: [{association: 'comentario'}, {association: 'user'}]
        })
            .then(resultados => res.render('product-add', {resultados}))
            .catch( err => console.log(err))
        // return res.render('product-add')
    },
    store: (req, res)=>{
        let product = {
            modelo: req.body.modelo,
            descripcion: req.body.descripcion,
            image: req.file.filename
        } 
        db.Product.create(product)
            .then(() => res.redirect('/users/profile'))
            .catch(err => console.log(err))
    },
    edit: (req, res)=>{
        let primaryKey = req.params.id;
        product.findByPk(primaryKey,  {
            include: [{association: 'comentario'}, {association: 'user'}]
        })
            .then(resultados => res.render('product-edit', { resultados }))
            .catch(err => console.log(err))
    }, 
    update: (req, res)=>{   
        let primaryKey = req.params.id;
        let productoActualizar = req.body
        product.update(
            productoActualizar, 
            {
                where: {
                    id: primaryKey
                }
            }
        )
            .then(()=> res.redirect('/users/profile'))
            .catch(err => console.log(err))
    },
    borrar: (req, res)=>{
        let primaryKey = req.params.id;
        product.destroy({
            where: {
                id: primaryKey
            }
        })
            .then(()=> res.redirect('/users/profile'))
            .catch(err=> console.log(err))
    },
    destroy: (req, res)=>{
        let primaryKey = req.params.id;
        product.destroy({
            where: {
                id: primaryKey
            }
        })
            .then(()=> res.redirect('/users/profile'))
            .catch(err=> console.log(err))
    },
}

module.exports = controller;