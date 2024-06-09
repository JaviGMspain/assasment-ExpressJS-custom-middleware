function roleSetter(req, res, next){
    // Set the role to 'user', 'admin', or 'editor'
    // by getting the `role` attribute from the request headers
    req.user =  { role: req.get('role') };
    next();
}


module.exports = roleSetter;