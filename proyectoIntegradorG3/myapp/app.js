const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const { body, validationResult } = require('express-validator'); // Importamos express-validator
const db = require("./database/models")

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const patitosRouter = require('./routes/patitos');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Configura la sesión
app.use(session({
  secret: 'Nuestro mensaje secreto',
  resave: false,
  saveUninitialized: true,
 // cookie: { secure: true } // Asegúrate de ajustar esto según tus necesidades
}));

app.use(function(req, res, next) {
  if (req.session.usuario) {
    res.locals.usuario = req.session.usuario;
  } else if (req.cookies.userId && !req.session.usuario) {
    let id = req.cookies.userId;
    db.Usuario.findByPk(id)
      .then(function(usuario) {
        if (usuario) {
          req.session.usuario = usuario;
          res.locals.usuario = usuario;
        }
        next();
      })
      .catch(function(error) {
        console.log(error);
        next();
      });
  } else {
    next();
  }
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/patitos', patitosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
