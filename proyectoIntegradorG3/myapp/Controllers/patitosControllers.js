const { validationResult } = require('express-validator');
const db = require("../database/models");

const patitosControllers = {
    index: function(req, res){
        const id = req.params.id;
        let condicional = {
            include: [
                {association: "usuario"},
                {association: "comentarios", include: [{association: "usuario"}]}
            ],
            order: [[{model: db.Comentario, as: "comentarios"}, "createdAt", "DESC"]]
        };
        let prop = false;
        
        db.Patito.findByPk(id, condicional)
            .then(function(result){
                if (!result) {
                    return res.status(404).send("Producto no encontrado");
                }
                if(req.session.usuario && req.session.usuario.id === result.usuario.id){
                    prop = true;
                }
                return res.render("product", {title: "product", productos: result, comentarios: result.comentarios, prop: prop});
            })
            .catch(function(err){
                console.log(err);
                return res.status(500).send("Error interno del servidor");
            });
    },

    patitos: function(req, res) {
        db.Patito.findAll({
            include: [{association: "usuario"}, {association: "comentario"}]
        })
        .then(function(result){
            return res.render("product", {productos: result});
        })
        .catch(function(err){
            console.log(err);
            return res.status(500).send("Error interno del servidor");
        });
    },

    add: function(req, res) {
        db.Usuario.findOne()
        .then(function(results){
            return res.render('add-product', {title: "Add Product", usuario: results});
        })
        .catch(function(err){
            console.log(err);
            return res.status(500).send("Error interno del servidor");
        });
    },

  detalle: function(req, res) {
    let idPatitos = req.params.idPatitos;
  
    db.Patito.findByPk(idPatitos, {
        include: [{ association: "usuario" }, { association: "comentario" }]
    })
    .then((result) => {
        if (!result) {
            return res.send("Producto no encontrado");
        }
        return res.render("product", { producto: result });
    })
    .catch((err) => {
        console.log(err);
        return res.send("Error interno del servidor");
    });
  },

  edit: function(req, res) {
    let id = req.params.id;

    if (!req.session.usuario) {
        return res.render("product", {
            error: "No puedes editar este producto si no estás registrado.",
            loginLink: "/users/login"
        });
    }

    db.Patito.findByPk(id)
    .then((producto) => {
        if (!producto) {
            return res.send("Producto no encontrado");
        }
        return res.render("edit-product", { producto });
    })
    .catch((err) => {
        console.log(err);
        return res.send("Error interno del servidor");
    });
},

delete: function(req, res) {
    let id = req.params.id;

    if (!req.session.usuario) {
        return res.render("product", {
            error: "No puedes eliminar este producto si no estás registrado.",
            loginLink: "/users/login"
        });
    }

    db.Patito.findByPk(id)
    .then((producto) => {
        if (!producto) {
            return res.send("Producto no encontrado");
        }
        return producto.destroy();
    })
    .then(() => {
        return res.redirect("/"); // Redirige a la página principal o a donde prefieras
    })
    .catch((err) => {
        console.log(err);
        return res.send("Error interno del servidor");
    });
},

    store: function(req, res){
      let idUsuario = null; // Por defecto, idUsuario es null

      if (req.session.usuario && req.session.usuario.id) {
          idUsuario = req.session.usuario.id; // Si existe req.session.usuario, asignamos su id a idUsuario
      }

      let form = {
          producto: req.body.producto,
          descripcion: req.body.descripcion,
          foto: req.body.foto, // Aquí se obtiene el nombre del archivo de la imagen
          idUsuario: idUsuario // Ajusta esto según cómo estés manejando el usuario en sesión
      };

      let errors = validationResult(req);
      if(errors.isEmpty()){
          db.Patito.create(form)
              .then((result) => {
                  return res.redirect("/patitos/id/" + result.id); // Redirigir al detalle del producto creado
              })
              .catch((err) => {
                  console.log(err);
                  return res.status(500).send("Error interno del servidor");
              });
      } else {
          db.Usuario.findOne()
              .then(function(results){
                  return res.render("add-product", {title: "Add Product", usuario: results, errors: errors.mapped(), old: req.body });
              })
              .catch(function(err){
                  console.log(err);
                  return res.status(500).send("Error interno del servidor");
              });
      }
  }
};

module.exports = patitosControllers;
