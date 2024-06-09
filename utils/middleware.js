// YOUR CODE HERE
function checkAdminRole(req, res, next) {
    if (req.user && req.user.role === `admin`) {
      return next();
    } else {
      return res.redirect(`/login`);
    }
  }
  
  function checkEditorOrAdminRole(req, res, next) {
    if (req.user && (req.user.role === `admin` || req.user.role === `editor`)) {
      return next();
    } else {
      return res.redirect(`/login`);
    }
  }
  
  // REMEMBER TO EXPORT YOUR MIDDLEWARE FUNCTIONS:
  
  module.exports = {
    checkAdminRole, checkEditorOrAdminRole
  };