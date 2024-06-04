const db = require ("../database/models");

const usersControllers = {
    login: function (req, res) {
        return res.render ("login", {title: "Login"}); 
        
    },
    loginPost: function (req, res) {
        let form = req.body;
        let filtro = {
            where: [
                {
                    mail: form.mail
                }
            ]
        }
      
        db.Usuario.findOne(filtro)
        .then(function (result) {
            
            let usuario =result
            if (usuario.contrasenia == form.contrasenia) {
                return res.redirect("/");  
            }
            else{
                return res.redirect("/users/login")
            }
        })
        .catch(err=>console.log(err))
        
    },


    register: function (req, res) {
        return res.render ("register", {title: "register"});
    },
    registerPost: function (req, res) {
        let form = req.body; 
       // return res.send(form)
        db.Usuario.create(form)
      .then((form) => {
          return res.redirect("/")
      }).catch((err) => {
        return console.log(err);
      });
        
    },


    profile: function (req, res) {
       /* return res.render ("profile", {title: "profile", usuarios: db.usuarios, productos: db.productos}); */
       db.Usuario.findAll()
       .then(function(result){

       })
       let usuario;
        let productos;

       db.Usuario.findOne()
            .then(function(results){
                usuario = results; 
                return db.Patito.findAll(); 
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
    },
    users: function (req,res) {
        db.Usuario.findAll()
        .then(function (result) {
            return res.send(result)
            
        })
        .catch(function (err) {
            console.log(err);
        })
    },
    store: function(req, res){
        console.log(req.body);
    }
};

module.exports = usersControllers;