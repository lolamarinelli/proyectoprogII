let profile = require('../data/profile')
let controller = {
    show: function (req, res){
        res.render('profile', {'profile': profile})
    }
}

module.exports = controller;