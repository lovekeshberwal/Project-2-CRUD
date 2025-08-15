export default function Toast({ type = 'info', message }) {
  if (!message) return null;
  const color = type === 'error' ? 'crimson' : type === 'success' ? '#065f46' : '#374151';
  const bg = type === 'error' ? '#fee2e2' : type === 'success' ? '#d1fae5' : '#e5e7eb';
  return (
    <div style={{ background: bg, color, padding: '10px 12px', borderRadius: 8, margin: '8px 0' }}>
      {message}
    </div>
  );
}