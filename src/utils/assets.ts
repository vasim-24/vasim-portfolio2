/**
 * Universal asset URL resolver that works seamlessly across:
 * 1. Localhost development (http://localhost:5173/)
 * 2. GitHub Pages repository subpaths (https://vasim-24.github.io/vasim-portfolio2/)
 * 3. Root deployments (e.g. Vercel, Netlify, custom domain)
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }

  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // Runtime environment detection in browser
  if (typeof window !== 'undefined') {
    const { pathname, hostname } = window.location;

    // Check if running on GitHub Pages (e.g. *.github.io) or repository subpath
    if (hostname.endsWith('github.io') || pathname.includes('/vasim-portfolio2')) {
      return `/vasim-portfolio2/${cleanPath}`;
    }
  }

  // Check Vite base URL
  const baseUrl = import.meta.env.BASE_URL || '/';
  if (baseUrl !== '/' && baseUrl !== './') {
    return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
  }

  return `/${cleanPath}`;
}

/**
 * Handle image load errors gracefully by attempting fallback paths
 */
export function handleImageError(
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  originalPath: string
) {
  const target = e.currentTarget;
  const attempts = Number(target.dataset.errorAttempts || '0');

  if (attempts === 0) {
    target.dataset.errorAttempts = '1';
    const clean = originalPath.startsWith('/') ? originalPath.slice(1) : originalPath;

    // If it failed with /vasim-portfolio2/, try root /
    if (target.src.includes('/vasim-portfolio2/')) {
      target.src = `/${clean}`;
    } else {
      // Try /vasim-portfolio2/
      target.src = `/vasim-portfolio2/${clean}`;
    }
  } else if (attempts === 1) {
    target.dataset.errorAttempts = '2';
    const clean = originalPath.startsWith('/') ? originalPath.slice(1) : originalPath;
    // Try relative path ./
    target.src = `./${clean}`;
  }
}

