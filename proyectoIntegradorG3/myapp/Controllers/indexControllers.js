const db = require ("../database/models");

const indexControllers = {
    index : function (req, res) {
        
        /*let id = req.params.id; */

        db.Comentarios.findAll() //no va findOne?
        .then(function(result){
           return res.send(result)
        })
        .then(function(results){
            
            //return res.render('product', {title:"Product Detail", productos: productos, comentarios: comentarios});
        })
        .catch(function(respuestaNegativa){
           return console.log(respuestaNegativa);
        });

       /* return res.render ('index', {title: "Index", productos: db.productos}); */
    },

    results : function (req, res) {
       /* return res.render ('searchResults', {title: "Search Results", productos: db.productos}); */
       db.Usuario.findOne()
        .then(function(results){
            return res.render('searchResults', {title:"Search Results", usuario: results});
        })
        .catch(function(respuestaNegativa){
            console.log(respuestaNegativa);
        });
    }
}


module.exports = indexControllers;