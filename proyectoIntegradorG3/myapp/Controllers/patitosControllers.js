const db = require ("../database/models");

const patitosControllers = {
    patitos : function (req, res) {
       /* return res.render ('product', {title: "Product Detail", productos : db.productos})*/

       db.Patito.findAll({
        include: [{association: "usuario"}, 
        {association: "comentario"}
      ] //Creo que esta línea no afecta en nada y es mejor sacarla(ya está el include en index)
       })
       .then(function(result){
          return res.render("product", {productos: result})
          //return res.send(result)
       })

       .catch(function(respuestaNegativa){
          return console.log(respuestaNegativa);
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
    },
    detalle: function(req, res) {
        let idPatitos = req.params.idPatitos;
  
        db.Patito.findByPk(idPatitos)
        .then((result) => {
          return res.render("product", {productos: result});
        }).catch((err) => {
          return console.log(err);
        });
      } 

}

module.exports = patitosControllers;