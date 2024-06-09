/****************************************************/
const express = require('express');                 //
const bodyParser = require('body-parser');          //
const cookieParser = require('cookie-parser');      //
const roleSetter = require('./utils/role-setter');  //
                                                    //
const app = express();                              //
                                                    //
                                                    //
app.use(roleSetter);                                //
/****************************************************/
/* Environment setup. Do not modify the above code. */ 




/* IMPORT MIDDLEWARE FILE HERE: */
// ...
const { checkAdminRole, checkEditorOrAdminRole } = require(`./utils/middleware`);


// Only 'admin' users should enter this endpoint
app.get('/delete-posts', checkAdminRole, (req, res, next) => {
  res.redirect('/admin-panel');
});
 
  
// Only 'admin' users should enter this endpoint
app.get('/delete-users', checkAdminRole, (req, res, next) => {
  res.redirect('/admin-panel');
});


// Only 'admin' or 'editor' users should enter this endpoint
app.get('/create-posts', checkEditorOrAdminRole, (req, res, next) => {
  res.redirect('/posts-panel');
});
 
 
// Only 'admin' or 'editor' users should enter this endpoint
app.get('/edit-posts', checkEditorOrAdminRole, (req, res, next) => {
  res.redirect('/posts-panel');
});
 



 
/* Environment setup. Do not modify the below code. */
/****************************************************/
module.exports = app;
/****************************************************/