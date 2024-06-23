const db = require ("../database/models");
const op = db.Sequelize.Op;
const bcrypt = require("bcryptjs");
const { validationResult } = require('express-validator');
const { update } = require('./patitosControllers');
const usersControllers = {
    login: function (req, res) {
        if (req.session.usuario != undefined) {
          return res.redirect("/" + req.session.usuario.id);
        }
        return res.render ("login", {title: "Login"}); 
        
    },
    loginPost: function (req, res) {
      let form = req.body;
      let errors = validationResult(req);
      if (errors.isEmpty()) {
        let filtro = {
          where: [
            {
              mail: form.mail,
            },
          ],
        };
        db.Usuario.findOne(filtro)
        .then(function (result) {
          let usuario = result;
          if (
            usuario &&
            bcrypt.compareSync(form.contrasenia, usuario.contrasenia)
          ) {
            req.session.usuario = usuario;
            if (form.recordar != undefined) { //en el lugar de form antes habia un req.body
              res.cookie("userId", usuario.id, { maxAge: 1000 * 60 * 60 * 24 });
            }
            return res.redirect("/");
          } else {
            return res.redirect("/");
          }
        })
        .catch((err) => console.log(err));
      }
      else {
        //Si hay errores, volvemos al formulario con los mensajes
        res.render("login", {errors: errors.mapped(), old: req.body});
      }      
    },

    register: function(req, res) {
        if (req.session.usuario != undefined) {
            return res.redirect("/users/profile" + req.session.usuario.id);
          }
        else{        
          return res.render ("register", {title: "register"});
        };
    },

    registerPost: function (req, res) {
      let form = req.body;
      let errors = validationResult(req);
      if (errors.isEmpty()) {
          const hashedPassword = bcrypt.hashSync(form.contrasenia, 10);
          const newUser = {
              nombre: form.nombre,
              apellido: form.apellido,
              mail: form.mail,
              usuario: form.usuario,
              contrasenia: hashedPassword,
              fechaNacimiento: form.fechaNacimiento,
              numeroDocumento: form.numeroDocumento,
              foto: form.foto,
          };
  
          db.Usuario.create(newUser)
          .then((user) => {
              res.render("register", { title: "register", successMessage: "¡Registro exitoso! Por favor, inicia sesión para continuar." });
          })
          .catch((err) => {
              console.log(err);
              res.render("register", { title: "register", errorMessage: "Hubo un problema durante el registro, por favor intenta nuevamente." });
          });
      } else {
          res.render("register", { title: "register", errors: errors.mapped(), old: req.body });
      }
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
                return res.render('profile', {
                    title:"Profile", 
                    usuario: usuario, 
                    productos: productos
                });
            })
            .catch(function(respuestaNegativa){
                console.log(respuestaNegativa);
            }); 
    },

    usersEdit: function (req, res) {
        db.Usuario.findOne()
        .then(function(results){
            return res.render('usersEdit', {
                title: 'Profile Edit', 
                usuario: results
            });
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
      let form = req.body;
      let errors = validationResult(req);
    },

    logout: function(req, res){ 
        req.session.destroy(function(err) {
            if (err) {
                console.log('err');
            } else {
                res.clearCookie("userId");
                return res.redirect ("/users/login")
                
            }

        
        });
    }
};

module.exports = usersControllers;