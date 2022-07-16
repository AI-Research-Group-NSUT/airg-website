

export function capitalizeFirst(str) {
  if (str.length < 2) return;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
