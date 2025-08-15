import { useEffect, useState } from 'react';

const empty = { title: '', description: '', price: 0, category: '', imageUrl: '', inStock: true, rating: 0 };

export default function ItemForm({ initial = empty, onSave, onCancel, editing }) {
  const [form, setForm] = useState(initial);
  useEffect(() => setForm(initial), [initial]);

  const update = (k, v) => setForm((d) => ({ ...d, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    const payload = { ...form, price: Number(form.price), rating: Number(form.rating) };
    if (!payload.title?.trim()) {
      alert('Title is required');
      return;
    }
    onSave(payload);
  };

  return (
    <form onSubmit={submit} style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: 16, marginBottom: 16 }}>
      <h3 style={{ marginTop: 0 }}>{editing ? 'Edit Item' : 'Create Item'}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <label>Title<input value={form.title} onChange={(e) => update('title', e.target.value)} style={{ width: '100%', padding: '10px 12px' }} /></label>
        <label>Category<input value={form.category} onChange={(e) => update('category', e.target.value)} style={{ width: '100%', padding: '10px 12px' }} /></label>
        <label>Price<input type="number" step="0.01" value={form.price} onChange={(e) => update('price', e.target.value)} style={{ width: '100%', padding: '10px 12px' }} /></label>
        <label>Rating<input type="number" min="0" max="5" step="0.1" value={form.rating} onChange={(e) => update('rating', e.target.value)} style={{ width: '100%', padding: '10px 12px' }} /></label>
        <label style={{ gridColumn: '1 / -1' }}>Image URL<input value={form.imageUrl} onChange={(e) => update('imageUrl', e.target.value)} style={{ width: '100%', padding: '10px 12px' }} /></label>
        <label style={{ gridColumn: '1 / -1' }}>Description<textarea rows={4} value={form.description} onChange={(e) => update('description', e.target.value)} style={{ width: '100%', padding: '10px 12px' }} /></label>
      </div>
      <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
        <input type="checkbox" checked={form.inStock} onChange={(e) => update('inStock', e.target.checked)} /> In stock
      </label>
      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <button type="submit" style={{ padding: '10px 12px' }}>Save</button>
        {editing && <button type="button" onClick={onCancel} style={{ padding: '10px 12px' }}>Cancel</button>}
      </div>
    </form>
  );
}