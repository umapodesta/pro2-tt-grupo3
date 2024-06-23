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
  
        db.Patito.findByPk(idPatitos)
        .then((result) => {
            if (!result) {
                return res.status(404).send("Producto no encontrado");
            }
            return res.render("product", {productos: result});
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).send("Error interno del servidor");
        });
    },

    store: function(req, res){
        let form = req.body;
        let errors = validationResult(req);
        if(errors.isEmpty()){
            db.Patito.create(form)
            .then((result) => {
                return res.redirect("/patitos/id/" + result.id); // Corregido: redirigir al detalle del producto creado
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).send("Error interno del servidor");
            });
        } else {
            return res.render("add-product", {title: "Add Product", errors: errors.mapped(), old: req.body });
        }
    }
};

module.exports = patitosControllers;
