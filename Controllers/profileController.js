let profile = require('../data/profile')
let product = require("../data/product")
let controller = {
    index: function (req, res){
        res.render('profile', {'profile': profile, product})
    },
    show: function (req, res){
        res.render('profile-edit', {'profile': profile})
    }
}

module.exports = controller;