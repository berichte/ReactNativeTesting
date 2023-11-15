export function isValidPassword(password: string) {
  if (password.length < 8) {
    return false;
  }
  if (!/.*[A-Z].*/.test(password)) {
    return false;
  }
  if (!/.*[0-9].*/.test(password)) {
    return false;
  }
  return true;
}
