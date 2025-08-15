export default function ItemCard({ item, onEdit, onDelete }) {
  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden' }}>
      {item.imageUrl ? (
        <img src={item.imageUrl} alt={item.title} style={{ width: '100%', height: 160, objectFit: 'cover' }} />
      ) : (
        <div style={{ height: 160, background: '#f3f4f6' }} />
      )}
      <div style={{ padding: 12 }}>
        <h4 style={{ margin: '0 0 6px' }}>{item.title}</h4>
        <p style={{ margin: 0, color: '#6b7280' }}>{item.category} • ⭐ {item.rating ?? 0}</p>
        <p style={{ marginTop: 8 }}>
          {(item.description || '').slice(0, 80)}{(item.description || '').length > 80 ? '…' : ''}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
          <strong>${Number(item.price || 0).toFixed(2)}</strong>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => onEdit(item)}>Edit</button>
            <button onClick={() => onDelete(item)} style={{ color: '#b91c1c' }}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}