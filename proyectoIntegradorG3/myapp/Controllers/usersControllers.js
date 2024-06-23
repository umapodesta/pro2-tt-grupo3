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
      user = db.Usuario;
      let errors = validationResult(req);
      if (errors.isEmpty()) {
        user.findOne({
          where:{email: req.body.mail}
        }).then(function(userFound){
          req.session.usuario = userFound
          if(req.body.recordarme != undefined){
            res.cookie("recordarme", userFound.email, {maxAge:24*60*60*1000})
          }
          return res.redirect("/");
        }).catch(function (errors) {
                console.log(errors);
        })
      }else{
        return res.render("login", {errors: errors.mapped()})
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
      user = db.Usuario;
      let form = req.body;
      let errors = validationResult(req);
      if (errors.isEmpty()) {
          const hashedPassword = bcrypt.hashSync(form.contrasenia, 10);
          user.create({
            nombre: form.nombre,
            apellido: form.apellido,
            mail: form.mail,
            usuario: form.usuario,
            contrasenia: hashedPassword,
            fechaNacimiento: form.fechaNacimiento,
            numeroDocumento: form.numeroDocumento,
            foto: form.foto
          })
          return res.redirect("/")
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

    usersEdit: function (req, res, next) {
      if (req.session.usuario) {
          let id = req.session.usuario.id;

          db.Usuario.findByPk(id)
              .then(function(result){
                  return res.render('editUsuario', {
                      title: 'Editar Perfil',
                      usuario: result
                  });
              })
              .catch(function(error){
                  console.log(error);
                  res.send('Error interno del servidor');
              });    
      } else {
          return res.redirect("/users/login");
      }
  },

  // Procesar la edición de usuario
  usersEditPost: async function (req, res) {
      const { email, username, password, fechaNacimiento, dni } = req.body;
      const userId = req.session.usuario.id;

      try {
          let usuario = await db.Usuario.findByPk(userId);

          if (!usuario) {
              return res.send("Usuario no encontrado");
          }

          // Actualizar los datos del usuario
          usuario.mail = email;
          usuario.usuario = username;
          usuario.fechaNacimiento = fechaNacimiento;
          usuario.numeroDocumento = dni;

          // Si se proporcionó una nueva contraseña, actualizarla
          if (password) {
              const hashedPassword = bcrypt.hashSync(password, 10);
              usuario.contrasenia = hashedPassword;
          }

          // Si se subió una nueva foto de perfil, actualizarla
          if (req.file) {
              usuario.foto = req.file.filename; // Ajustar según cómo se guarda el nombre en la base de datos
          }

          // Guardar los cambios en la base de datos
          await usuario.save();

          res.redirect('/'); // Redirigir a la página principal u otra página de perfil
      } catch (error) {
          console.log(error);
          res.send('Error interno del servidor');
      }
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