const jwt = require('jsonwebtoken');

exports.checkRole = (rolesPermitidos) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No hay token' });

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      if (!rolesPermitidos.includes(decoded.role)) {
        return res.status(403).json({ message: 'Acceso denegado: No tienes permisos suficientes.' });
      }

      next();
    } catch (error) {
      res.status(401).json({ message: 'Token inválido' });
    }
  };
};
