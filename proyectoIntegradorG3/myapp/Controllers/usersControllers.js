const db = require("../database/models");
const bcrypt = require("bcryptjs");
const { validationResult } = require('express-validator');

const usersControllers = {
  login: function(req, res) {
    if (req.session.usuario != undefined) {
      return res.redirect("/users/profile"); // Redirige al perfil del usuario si ya está logueado
    }
    return res.render("login", { title: "Login" });
  },

    loginPost: function(req, res) {
      console.log("Iniciando proceso de login");
      const errors = validationResult(req);
    
      if (!errors.isEmpty()) {
        console.log("Errores de validación:", errors.mapped());
        return res.render("login", { errors: errors.mapped() });
      }
    
      console.log("No hay errores de validación");
    
      // Buscar usuario por correo electrónico
      db.Usuario.findOne({ where: { mail: req.body.mail } })
        .then(userFound => {
          if (!userFound) {
            console.log("Usuario no encontrado");
            return res.render("login", { errors: { general: { msg: 'Usuario no encontrado' } } });
          }
    
          // Comparar la contraseña ingresada con la contraseña almacenada
          const passwordMatch = bcrypt.compareSync(req.body.contrasenia, userFound.contrasenia);
          if (!passwordMatch) {
            console.log("Contraseña incorrecta");
            return res.render("login", { errors: { general: { msg: 'Contraseña incorrecta' } } });
          }
    
          console.log("Usuario encontrado:", userFound);
          req.session.usuario = userFound; // Almacena el usuario en la sesión
    
          if (req.body.recordarme) {
            res.cookie("recordarme", userFound.mail, { maxAge: 24 * 60 * 60 * 1000 });
          }
    
          return res.redirect('/users/profile'); // Redirige al perfil del usuario
        })
        .catch(error => {
          console.log("Error al encontrar usuario:", error);
          return res.render("login", { errors: { general: { msg: 'Error interno del servidor' } } });
        });
    },
    
  register: function(req, res) {
    if (req.session.usuario != undefined) {
      return res.redirect("/users/profile" + req.session.usuario.id);
    } else {
      return res.render("register", { title: "register" });
    }
  },

  registerPost: function(req, res) {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log("Errores de validación:", errors.mapped());
      return res.render("register", { title: "register", errors: errors.mapped(), old: req.body });
    }

    console.log("No hay errores de validación");

    // Hash de la contraseña
    const hashedPassword = bcrypt.hashSync(req.body.contrasenia, 10);

    // Crear nuevo usuario en la base de datos
    db.Usuario.create({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      mail: req.body.mail,
      usuario: req.body.usuario,
      contrasenia: hashedPassword,
      fechaNacimiento: req.body.fechaNacimiento,
      numeroDocumento: req.body.numeroDocumento,
      foto: req.body.foto
    })
    .then(() => {
      return res.redirect("/users/login"); // Redirige al login después de registrar correctamente
    })
    .catch(error => {
      console.log("Error al registrar usuario:", error);
      return res.render("register", { title: "register", errors: { general: { msg: 'Error al registrar usuario' } }, old: req.body });
    });
  },

  profile: function(req, res) {
    // Verificar si el usuario está autenticado
    if (!req.session.usuario) {
      return res.send("Usuario no autenticado");
    }

    let usuario;
    let productos;

    // Obtener el usuario actual
    db.Usuario.findByPk(req.session.usuario.id)
      .then(function(user) {
        if (!user) {
          return res.status(404).send("Usuario no encontrado");
        }
        usuario = user;

        // Obtener los productos del usuario actual (ajustar según tus modelos)
        return db.Producto.findAll({
          where: { idUsuario: usuario.id } // Ajustar esto según tu modelo de datos
        });
      })
      .then(function(prods) {
        productos = prods;

        // Definir `prop` basado en algún criterio
        let prop = true; // Por ejemplo, podrías verificar permisos o roles

        // Renderizar la vista con los datos del usuario y sus productos
        return res.render("profile", {
          title: "Perfil de Usuario",
          usuario: usuario,
          productos: productos,
          prop: prop
        });
      })
      .catch(function(error) {
        console.log(error);
        return res.status(500).send("Error interno del servidor");
      });
  },

  usersEdit: function(req, res, next) {
    if (req.session.usuario) {
      let id = req.session.usuario.id;
      db.Usuario.findByPk(id)
        .then(function(result) {
          return res.render('editUsuario', {
            title: 'Editar Perfil',
            usuario: result
          });
        })
        .catch(function(error) {
          console.log(error);
          res.send('Error interno del servidor');
        });
    } else {
      return res.redirect("/users/login");
    }
  },

  usersEditPost: async function(req, res) {
    const { mail, username, contrasenia, fechaNacimiento, dni } = req.body;
    const userId = req.session.usuario.id;
    try {
      let usuario = await db.Usuario.findByPk(userId);
      if (!usuario) {
        return res.send("Usuario no encontrado");
      }
      usuario.mail = mail;
      usuario.usuario = username;
      usuario.fechaNacimiento = fechaNacimiento;
      usuario.numeroDocumento = dni;
      if (contrasenia) {
        const hashedPassword = bcrypt.hashSync(contrasenia, 10);
        usuario.contrasenia = hashedPassword;
      }
      if (req.file) {
        usuario.foto = req.file.filename;
      }
      await usuario.save();
      res.redirect('/');
    } catch (error) {
      console.log(error);
      res.send('Error interno del servidor');
    }
  },

  users: function(req, res) {
    db.Usuario.findAll()
      .then(function(result) {
        return res.send(result);
      })
      .catch(function(err) {
        console.log(err);
      });
  },

  store: function(req, res) {
    let errors = validationResult(req);
    // ...
  },

  logout: function(req, res) {
    req.session.destroy(function(err) {
      if (err) {
        console.log(err);
      } else {
        res.clearCookie("recordarme");
        return res.redirect("/users/login");
      }
    });
  }
};

module.exports = usersControllers;
