// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function (req, res, next) {
    // If the user is logged in, continue with the request to the restricted route
    if (req.user) {
      console.log(req.user)
      return next();
    }
    return res.status(403).redirect('/html/admin/login');
  };
