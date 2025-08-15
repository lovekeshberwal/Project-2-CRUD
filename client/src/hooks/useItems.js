// src/hooks/useItems.js
import { useCallback, useState } from 'react';

const DEFAULT_LIMIT = 100;

export default function useItems() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (query.trim()) params.set('q', query.trim());
      params.set('limit', String(DEFAULT_LIMIT));
      params.set('offset', '0');

      const res = await fetch(`/api/items?${params.toString()}`);
      if (!res.ok) throw new Error(`Failed to load items (${res.status})`);
      const data = await res.json();
      const list = Array.isArray(data) ? data : (data.items ?? []);
      setItems(list);
    } catch (e) {
      setError(e?.message || 'Failed to load items');
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, [query]);

  const createItem = useCallback(async (payload) => {
    const res = await fetch('/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Create failed (${res.status})`);
    const created = await res.json();
    setItems(prev => [created, ...prev]);
    return created;
  }, []);

  const updateItem = useCallback(async (id, payload) => {
    const res = await fetch(`/api/items/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Update failed (${res.status})`);
    const updated = await res.json();
    setItems(prev => prev.map(it => (it._id === id ? updated : it)));
    return updated;
  }, []);

  const deleteItem = useCallback(async (id) => {
    const res = await fetch(`/api/items/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error(`Delete failed (${res.status})`);
    setItems(prev => prev.filter(it => it._id !== id));
  }, []);

  return { items, query, setQuery, loading, error, load, createItem, updateItem, deleteItem };
}