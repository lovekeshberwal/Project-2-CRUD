import { useEffect, useMemo, useState } from 'react';
import useItems from '../hooks/useItems';
import ItemForm from '../components/ItemForm';
import ItemCard from '../components/ItemCard';
import Loader from '../components/Loader';
import Toast from '../components/Toast';
import { itemsSeed } from './itemSeed';

const empty = { title: '', description: '', price: 0, category: '', imageUrl: '', inStock: true, rating: 0 };

export default function ItemsPage() {
  const { items, query, setQuery, loading, error, load, createItem, updateItem, deleteItem } = useItems();
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(empty);

  const isSearching = useMemo(() => query.trim() !== '', [query]);
  const showForm = editingId || !isSearching;

  useEffect(() => { load(); }, []); // initial

  const handleEdit = (item) => {
    setEditingId(item._id);
    setFormData({
      title: item.title || '',
      description: item.description || '',
      price: item.price ?? 0,
      category: item.category || '',
      imageUrl: item.imageUrl || '',
      inStock: Boolean(item.inStock),
      rating: item.rating ?? 0
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (item) => {
    if (!confirm(`Delete "${item.title}"?`)) return;
    try { await deleteItem(item._id); } catch (e) { alert(e.message || 'Delete failed'); }
  };

  const resetForm = () => { setEditingId(null); setFormData(empty); };

  const handleSave = async (payload) => {
    try {
      if (editingId) { await updateItem(editingId, payload); alert('Item updated'); }
      else { await createItem(payload); alert('Item created'); }
      resetForm();
      await load();
    } catch (e) { alert(e.message || 'Save failed'); }
  };

  const addDemoItems = async () => {
    try {
      for (const it of itemsSeed) {
        const { _id, ...payload } = it; // let backend assign its own id
        await createItem(payload);
      }
      await load();
      alert('20 demo items added');
    } catch (e) {
      alert(e?.message || 'Failed to add demo items');
    }
  };

  return (
    <div className="items">
      {/* Aurora backdrop for the page */}
      <div className="items__aurora" aria-hidden />
      <section className="container">
        {/* Hero + toolbar */}
        <div className="items__hero">
          <h3 className="items__title">Items</h3>
          <p className="items__sub">Browse, search, create, edit, and delete items with style.</p>
        </div>

        <div className="toolbar items__toolbar glass">
          <div className="search">
            <span className="search__icon" aria-hidden>🔎</span>
            <input
              className="search__input"
              placeholder="Search items by title, category, or description..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') load(); }}
            />
            <div className="search__shine" aria-hidden />
          </div>
          <div className="toolbar__actions">
            <button className="btn btn-ghost" onClick={load}>Search</button>
            <button className="btn btn-secondary" onClick={addDemoItems}>Load Demo Data</button>
            <button className="btn btn-primary fx-lift" onClick={() => { resetForm(); setQuery(''); }}>+ New</button>
          </div>
        </div>

        {!showForm && (
          <div className="muted" style={{ marginBottom: 10 }}>
            Tip: Clear the search box to create a new item.
          </div>
        )}

        {showForm && (
          <div className="items__form fx-pop">
            <ItemForm
              initial={formData}
              onSave={handleSave}
              onCancel={resetForm}
              editing={Boolean(editingId)}
            />
          </div>
        )}

        {/* Status */}
        {loading && (
          <div className="items__skeleton grid grid-cards">
            {Array.from({ length: 6 }).map((_, i) => (
              <div className="skeleton card" key={i}>
                <div className="skeleton__image" />
                <div className="skeleton__line" />
                <div className="skeleton__line skeleton__line--short" />
                <div className="skeleton__line" />
              </div>
            ))}
          </div>
        )}
        {error && <Toast type="error" message={`Error: ${error}`} />}

        {/* Grid */}
        {!loading && !error && items.length > 0 && (
          <div className="items__grid grid grid-cards">
            {items.map((it) => (
              <div key={it._id} className="fx-card">
                {/* Shine layer */}
                <div className="fx-card__shine" aria-hidden />
                <ItemCard item={it} onEdit={handleEdit} onDelete={handleDelete} />
              </div>
            ))}
          </div>
        )}

        {/* Empty */}
        {!loading && !error && items.length === 0 && (
          <div className="empty">
            <div className="empty__glow" aria-hidden />
            <div className="empty__badge">No Results</div>
            <h4 className="empty__title">Nothing to see here… yet</h4>
            <p className="empty__sub">Try a different search or create a new item to get started.</p>
            <button className="btn btn-primary fx-lift" onClick={() => { resetForm(); setQuery(''); }}>
              Create an item
            </button>
          </div>
        )}
      </section>
    </div>
  );
}