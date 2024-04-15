const db = require ("../db/database");

const usersControllers = {
    login: function (req, res) {
        return req.render ("login", {title: "Login"});
    },

    register: function (req, res) {
        return req.render ("resgister", {title: "register"});
    },

    profile: function (req, res) {
        return req.render ("profile", {title: "profile", usuarios: db.usuarios, productos: db.productos});
    },

    usersEdit: function (req, res) {
        return req.render ("Profile edit", {title: "Profile edit", usuarios: db.usuarios});
    }
};

module.exports = userControllers;