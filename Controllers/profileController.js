let profile = require('../data/profile')
let controller = {
    index: function (req, res){
        res.render('profile', {'profile': profile})
    },
    show: function (req, res){
    res.render('profile-edit', {'profile-edit': profile})
        }
}

module.exports = controller;