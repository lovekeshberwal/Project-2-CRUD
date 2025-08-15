export const BASE = (import.meta?.env?.VITE_API_URL || '').replace(/\/$/, '');
export async function apiFetch(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options
  });
  const text = await res.text();
  let body = {};
  try { body = text ? JSON.parse(text) : {}; } catch {}
  if (!res.ok) throw new Error(body?.message || `Request failed: ${res.status}`);
  return body;
}