let profile = require('../data/profile')
let controller = {
    index: function (req, res){
        res.render('login', {'login': profile})
    },
    show: function (req, res){
    res.render('register', {'register': profile})
        } 
}

module.exports = controller;