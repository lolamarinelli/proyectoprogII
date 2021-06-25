const db = require('../database/models')
const product = db.Product
const op = db.Sequelize.Op
const bcrypt = require('bcryptjs') 

let controller = {
    show: (req, res)=>{
        let primaryKey = req.params.id;
        // product.findByPk(primaryKey, {
        //     include: [{association: 'user', 
        //     include:[{association: 'comentario',
        //     include:[{association:'user'}]
        // }]}]
        // })
        product.findByPk(primaryKey, 
            {include: [{association: 'user'}, 
            {association:'comentario', include:[{association:'user'}]}]
        })
            .then(product => res.render('product', {product}))  
            // .then(product=>res.send(product)) 
            .catch( err => console.log(err))
    },
    add: (req, res)=>{
        product.findAll({
            include: [{association: 'user'}, {association: 'comentario'}]
        })
            .then(product => res.render('product-add', {product})) 
            .catch( err => console.log(err))
        // return res.render('product-add')
    },
    store: (req, res)=>{
        let errors = {}
        if(req.body.modelo == ''){
            errors.register = 'El modelo no puede estar vacío'
            res.locals.errors = errors
            return res.render('product-add')
        }else if (req.body.descripcion == ''){
            errors.register = 'La descripción no puede estar vacía'
            res.locals.errors = errors
            return res.render('product-add')
        }else{
            let product = {
                modelo: req.body.modelo,
                descripcion: req.body.descripcion,
                image: `/images/products/${req.file.filename}`,
                user_id: req.session.user.id
                
            } 
            db.Product.create(product)
                .then(() => res.redirect('/'))
                .catch(err => console.log(err))
        }   
    },
    comentarios: (req, res)=>{
        if(req.session.user == undefined){
            return res.redirect('/users')
        }else{
            let comentarios = {
                comentario: req.body.comentario,
                user_id: res.locals.users.id,
                product_id: res.locals.product.id,
            }
            db.Comentario.create(comentarios)
                .then(() => res.redirect('/product'))
                .catch(err => console.log(err))
        }
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
            productoActualizar, {where: {id: primaryKey}}
        )
            .then(()=> res.redirect('/'))
            .catch(err => console.log(err))
    },
    borrar: (req, res)=>{
        let primaryKey = req.params.id;
        product.destroy({
            where: {
                id: primaryKey
            }
        })
            .then(()=> res.redirect('/'))
            .catch(err=> console.log(err))
    },
    destroy: (req, res)=>{
        let primaryKey = req.params.id;
        product.destroy({
            where: {
                id: primaryKey
            }
        })
            .then(()=> res.redirect('/'))
            .catch(err=> console.log(err))
    },
}

module.exports = controller;