// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function (requiredTier, route) { //it receives a requireTier and a route in case the user is not autorised nor authenticated
  return function (req, res, next) {
    // If the user is logged in, continue with the request to the restricted route
    if (req.user) {
      if (req.user.tier === requiredTier) {
        return next();
      }

      // If the user isn't logged in, redirect them to the login page or to the received route
      console.log(route)
      if (route) {
        return res.redirect(route);
      }
    }
    return res.redirect("/");
  }
};
