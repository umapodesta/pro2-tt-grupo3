

const db = require ("../database/models");

const usersControllers = {
    login: function (req, res) {
        return res.render ("login", {title: "Login"}); 
        
    },

    register: function (req, res) {
        return res.render ("register", {title: "register"});
    },

    profile: function (req, res) {
       /* return res.render ("profile", {title: "profile", usuarios: db.usuarios, productos: db.productos}); */
        let usuario;
        let productos;

       db.Usuario.findOne()
            .then(function(results){
                usuario = results; 
                return db.Patitos.findAll(); 
            })
            .then(function(results){
                productos = results;
                return res.render('profile', {title:"Profile", usuario: usuario, productos: productos});
            })
            .catch(function(respuestaNegativa){
                console.log(respuestaNegativa);
            }); 
    },

    usersEdit: function (req, res) {
        /*return res.render ("usersEdit", {title: "ProfileEdit", usuarios: db.usuarios}); */

        db.Usuario.findOne()
        .then(function(results){
            return res.render('usersEdit', {title: 'Profile Edit', usuario: results});
        })
        .catch(function(respuestaNegativa){
            console.log(respuestaNegativa);
        }); 
    }
};

module.exports = usersControllers;