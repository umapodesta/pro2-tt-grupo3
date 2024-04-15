const db = require ("../db/database");

const usersControllers = {
    login: function (req, res) {
        return res.render ("login", {title: "Login"});
    },

    register: function (req, res) {
        return res.render ("register", {title: "register"});
    },

    profile: function (req, res) {
        return res.render ("profile", {title: "profile", usuarios: db.usuarios, productos: db.productos});
    },

    usersEdit: function (req, res) {
        return res.render ("profile-edit", {title: "Profile-edit", usuarios: db.usuarios});
    }
};

module.exports = usersControllers;