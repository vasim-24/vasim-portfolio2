/**
 * Helper to resolve public asset paths correctly regardless of whether the app
 * is running at the domain root (e.g. localhost) or in a GitHub Pages subpath (/vasim-portfolio2/).
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const baseUrl = import.meta.env.BASE_URL || './';
  
  // If baseUrl is './', produce clean relative path
  if (baseUrl === './' || baseUrl === '') {
    return `./${cleanPath}`;
  }
  
  return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
}
