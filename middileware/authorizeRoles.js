// middleware/authorizeRoles.js

function authorizeRoles(roles) {
  return (req, res, next) => {
    const userRole = req.user.role;
    if (!roles.includes(userRole)) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    next();
  };
}

module.exports = authorizeRoles;
