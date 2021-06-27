const db = require('../database/models')
const product = db.Product
// const comentario = db.Comentario
const users = db.User
const op = db.Sequelize.Op
const bcrypt = require('bcryptjs') 

let controller = {
    //LOGIN
    login: (req, res)=>{
        // Control de acceso
        if(req.session.user != undefined){
            return res.redirect('/')
        } else {
            return res.render('login')
        }
    }, 
    processLogin: (req, res) => {
        // Variable para guardar errores
        let errors = {};

        // Buscar el usuario por medio del mail
        db.User.findOne({
            where: [{ email: req.body.email }]
        })
        .then( user => {
            if(user==null){
               errors.login = "Email o la contraseña son incorrectos";
               res.locals.errors = errors;
               return res.render('login') 
            } else if (bcrypt.compareSync(req.body.password, user.password) == false){
                errors.login = "Email o la contraseña son incorrectos";
                res.locals.errors = errors;
               return res.render('login') 
            } else {
                req.session.user = user;
                console.log(user)
                if(req.body.recordarme != undefined){
                    res.cookie('user_id', user.id, {maxAge: 1000 * 60 * 5}); //chequear si es userId
                }
            }
            return res.redirect('/');
        })
        .catch( err => console.log(err))
    },
    logout: (req, res) => {
        req.session.destroy()
        res.clearCookie('user_id')
        return res.redirect('/users')
    },

    //REGISTER
    register: (req, res)=>{
        // Control de acceso
        if(req.session.user != undefined){
            return res.redirect('/')
        } else {
            return res.render('register')
        }
    }, 
    store: (req, res) => {
        console.log(req.body) 
        let errors = {};
        
        if(req.body.email == ""){ // El mail no debe esta vacio
            errors.register = "Email no puede estar vacio"
            res.locals.errors = errors

            return res.render('register')

        } else if (req.body.nombre == ""){ 
        errors.register = "Nombre no puede estar vacio"
        res.locals.errors = errors

        return res.render('register')
        } else if (req.body.apellido == ""){ 
            errors.register = "Apellido no puede estar vacio"
            res.locals.errors = errors

            return res.render('register')
        } else if (req.body.fecha == ""){ 
            errors.register = "Fecha no puede estar vacio"
            res.locals.errors = errors

            return res.render('register')
        } else if (req.body.password == ""){
            errors.register = "Contraseña no puede estar vacio"
            res.locals.errors = errors

            return res.render('register')
        } else if (req.body.password.length <4){ 
            errors.register = "Password debe tener mas de 3 caracteres"
            res.locals.errors = errors
            
            return res.render('register')
        } else if(req.body.repassword == ""){
            errors.register = "Re escribir contraseña no puede estar vacio"
            res.locals.errors = errors

            return res.render('register')
        } else {
           users.findOne({where: [{ email : req.body.email}]})
            .then( user => {
                if(user !==null){
                    errors.register = "Email ya existe"
                    res.locals.errors = errors

                    return res.render('register')
                } else if(req.body.password != req.body.repassword ) {
                    errors.register = "Los password no coinciden"
                    res.locals.errors = errors

                    return res.render('register')
                } else {
                    console.log('Crea el usuario')
                    let user = {
                        nombre: req.body.nombre,
                        apellido: req.body.apellido,
                        email: req.body.email,
                        fecha: req.body.fecha,
                        password: bcrypt.hashSync(req.body.password, 10),
                        repassword: bcrypt.hashSync(req.body.password, 10),
                        image: `/images/users/${req.file.filename}`
                        
                    }
                    users.create(user)
                        .then( user => {
                            console.log(user)
                            return res.redirect('/users')
                        })
                        .catch( err => console.log(err))
                }
                console.log('llego al final')
            })
            .catch( err => {
            console.log(err)
            res.send(err)}) 
        }  
    },

    //PROFILE
    profile: (req, res)=>{
        let user_id = req.params.id
        product.findAll({
            include: [{association: 'comentario'}, {association: 'user'}],
            where:[{user_id: {[op.like]:`${user_id}`}}]
        })
            .then((resultados)=> res.render('profile', { resultados }))
            .catch((err)=> `Error: ${err}`)
    },
    otherProfiles: (req, res)=>{
        let user_id = req.params.id
        product.findAll({
            include: [{association: 'comentario'}, {association: 'user', include: [{association: 'comentario'}]}],
            where:[{user_id: {[op.like]:`${user_id}`}}]
        })
            .then((resultados)=> res.render('other-profiles', { resultados }))
            .catch((err)=> `Error: ${err}`)
    },
    edit: (req, res)=>{
        let primaryKey = req.params.id;
        users.findByPk(primaryKey,  {
            include: [{association: 'comentario'}, {association: 'product'}]
        })
            .then(resultados => res.render('profile-edit', { resultados }))
            .catch(err => console.log(err))
    }, 
    update: (req, res)=>{   
        let primaryKey = req.params.id;
        let userActualizar = req.body
        users.update(
            userActualizar, {where: {id: primaryKey}}
        )
            .then(()=> res.redirect('/'))
            .catch(err => console.log(err))
    },

}

module.exports = controller;

//let hola = 456789