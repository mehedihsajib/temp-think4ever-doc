export { cn } from "cn";

export function normalizePath(path?: string | null): string {
  if (!path) return "";
  let clean = path.trim();
  if (clean.startsWith("http://") || clean.startsWith("https://")) {
    try {
      clean = new URL(clean).pathname;
    } catch {
      // ignore
    }
  }
  if (clean.startsWith("/docs")) {
    clean = clean.slice(5);
  }
  clean = clean.replace(/\/+$/, "");
  return clean || "/";
}

export function isPathActive(currentPath?: string | null, targetHref?: string | null): boolean {
  if (!targetHref || !currentPath) return false;
  return normalizePath(currentPath) === normalizePath(targetHref);
}
