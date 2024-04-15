const db = require ("../db/database");

const patitosControllers = {
    patitos : function (req, res) {
        return res.render ('product', {title: "Product Detail", productos : db.productos})
    },

    add : function (req, res) {
        return res.render ('product-add', {title: "Add product", usuarios : db.usuarios})
    }
}

module.exports = patitosControllers;