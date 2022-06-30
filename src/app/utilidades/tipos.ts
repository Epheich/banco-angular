export function esJSON(dato: string): boolean {
  try {
    JSON.parse(dato);
    return true;
  } catch (e) {
    return false;
  }
}
