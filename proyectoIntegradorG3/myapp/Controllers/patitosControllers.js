const db = require ("../db/database");

const patitosControllers = {
    patitos : function (req, res) {
       /* return res.render ('product', {title: "Product Detail", productos : db.productos})*/

       let comentarios;
       let productos;
       db.Patitos.findOne()
       .then(function(results){
           productos = results;
           return db.Comentarios.findAll({
               limit: 5,
           });
       })
       .then(function(results){
           comentarios = results;
           return res.render('product', {title:"Product Detail", productos: productos, comentarios: comentarios});
       })
       .catch(function(respuestaNegativa){
           console.log(respuestaNegativa);
       });
    },

    add : function (req, res) {
        /*return res.render ('add-product', {title: "Add product", usuarios : db.usuarios})*/
        db.Usuario.findOne()
        .then(function(results){
            return res.render('add-product', {title:"Add Product", usuario: results});
        })
        .catch(function(respuestaNegativa){
            console.log(respuestaNegativa);
        });
    }
}

module.exports = patitosControllers;