/** Prefixes an app-relative path with the configured base (e.g. '/portfolio' in CI). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
