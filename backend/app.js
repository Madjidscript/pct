var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { connected } = require('./config/mongoose');
const cors = require('cors')
connected().catch(error=>console.log("erreur au niveau de la bases de doner",error))
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/uploads',express.static('./uploads'));
app.use(cors());  
// {
//   origin: 'https://pct-theta.vercel.app'
// }
app.use(logger('dev'));
app.use(express.json());
//configuration de ma session
app.use(session({
  secret: 'peintre', // Une chaîne secrète pour signer les cookies de session
  resave: false, // Ne pas enregistrer la session à chaque requête
  saveUninitialized: true, // Enregistrer une session vide pour les nouveaux utilisateurs
}));


app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', indexRouter);
app.use('/', usersRouter);

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
