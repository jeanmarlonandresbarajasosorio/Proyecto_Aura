export const checkRole = (user, rolesPermitidos) => {
  if (!user || !rolesPermitidos.includes(user.role)) return false;
  return true;
};