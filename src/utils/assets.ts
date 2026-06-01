export function publicAsset(path: string) {
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(path)) {
    return path;
  }

  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;

  return `${normalizedBase}${normalizedPath}`;
}
