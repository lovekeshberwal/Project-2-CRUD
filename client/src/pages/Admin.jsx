import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiFetch } from '../api';
import Toast from '../components/Toast';

export default function Admin() {
  const navigate = useNavigate();
  const [mode, setMode] = useState('login'); // 'login' | 'signup'
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({ type: 'info', text: '' });

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  });

  const update = (k, v) => setForm((d) => ({ ...d, [k]: v }));

  const validate = () => {
    const emailOk = /^\S+@\S+\.\S+$/.test(form.email);
    if (!emailOk) return 'Please enter a valid email address';
    if (!form.password || form.password.length < 6) {
      return 'Password must be at least 6 characters';
    }
    if (mode === 'signup') {
      if (!form.name.trim()) return 'Please enter your name';
      if (form.password !== form.confirm) return 'Passwords do not match';
    }
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg({ type: 'info', text: '' });
    const err = validate();
    if (err) {
      setMsg({ type: 'error', text: err });
      return;
    }
    setLoading(true);
    try {
      if (mode === 'login') {
        const body = await apiFetch('/api/auth/login', {
          method: 'POST',
          body: JSON.stringify({ email: form.email, password: form.password })
        });
        localStorage.setItem('token', body.token || '');
        setMsg({ type: 'success', text: 'Logged in successfully' });
      } else {
        const body = await apiFetch('/api/auth/signup', {
          method: 'POST',
          body: JSON.stringify({ name: form.name.trim(), email: form.email, password: form.password })
        });
        localStorage.setItem('token', body.token || '');
        setMsg({ type: 'success', text: 'Account created successfully' });
      }
      setTimeout(() => navigate('/items'), 400);
    } catch (e2) {
      setMsg({ type: 'error', text: e2.message || 'Request failed' });
    } finally {
      setLoading(false);
    }
  };

  const switchMode = (m) => {
    setMode(m);
    setMsg({ type: 'info', text: '' });
    setForm({ name: '', email: '', password: '', confirm: '' });
  };

  return (
    <div style={{ padding: 16, minHeight: '60vh', display: 'grid', placeItems: 'center' }}>
      <div style={{
        width: 'min(460px, 92vw)',
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: 16,
        padding: 18,
        background: 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.85))',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        backdropFilter: 'blur(6px)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12, gap: 8 }}>
          <button
            onClick={() => switchMode('login')}
            style={{
              padding: '8px 12px',
              borderRadius: 10,
              border: '1px solid #e5e7eb',
              background: mode === 'login' ? '#111827' : '#fff',
              color: mode === 'login' ? '#fff' : '#111827'
            }}
          >
            Log in
          </button>
          <button
            onClick={() => switchMode('signup')}
            style={{
              padding: '8px 12px',
              borderRadius: 10,
              border: '1px solid #e5e7eb',
              background: mode === 'signup' ? '#111827' : '#fff',
              color: mode === 'signup' ? '#fff' : '#111827'
            }}
          >
            Sign up
          </button>
        </div>

        <h3 style={{ textAlign: 'center', marginTop: 0 }}>
          {mode === 'login' ? 'Welcome back' : 'Create your account'}
        </h3>
        <p style={{ textAlign: 'center', color: '#6b7280', marginTop: -6 }}>
          {mode === 'login'
            ? 'Use your email and password to access Admin.'
            : 'Join in seconds—then manage items with ease.'}
        </p>

        <form onSubmit={handleSubmit} style={{ marginTop: 14 }}>
          {mode === 'signup' && (
            <label>
              Name
              <input
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                placeholder="Your full name"
                style={{ width: '100%', padding: '10px 12px' }}
              />
            </label>
          )}

          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              placeholder="you@example.com"
              style={{ width: '100%', padding: '10px 12px' }}
            />
          </label>

          <label>
            Password
            <div style={{ position: 'relative' }}>
              <input
                type={showPwd ? 'text' : 'password'}
                value={form.password}
                onChange={(e) => update('password', e.target.value)}
                placeholder="••••••••"
                style={{ width: '100%', padding: '10px 12px', paddingRight: 44 }}
              />
              <button
                type="button"
                onClick={() => setShowPwd((s) => !s)}
                aria-label={showPwd ? 'Hide password' : 'Show password'}
                style={{
                  position: 'absolute', right: 6, top: 6, bottom: 6,
                  padding: '0 10px', borderRadius: 8, border: '1px solid #e5e7eb', background: '#fff'
                }}
              >
                {showPwd ? 'Hide' : 'Show'}
              </button>
            </div>
          </label>

          {mode === 'signup' && (
            <label>
              Confirm password
              <input
                type={showPwd ? 'text' : 'password'}
                value={form.confirm}
                onChange={(e) => update('confirm', e.target.value)}
                placeholder="Repeat password"
                style={{ width: '100%', padding: '10px 12px' }}
              />
            </label>
          )}

          <div style={{ marginTop: 12 }}>
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%', padding: '12px 14px',
                borderRadius: 12, border: 'none',
                background: 'linear-gradient(90deg, #7c3aed, #22d3ee)', color: '#fff',
                boxShadow: '0 12px 30px rgba(124,58,237,0.28)', opacity: loading ? 0.7 : 1
              }}
            >
              {loading ? 'Please wait…' : mode === 'login' ? 'Log in' : 'Create account'}
            </button>
          </div>
        </form>

        <div style={{ marginTop: 10 }}>
          <Toast type={msg.type} message={msg.text} />
        </div>

        <p style={{ marginTop: 12, color: '#6b7280', fontSize: 13, textAlign: 'center' }}>
          {mode === 'login' ? (
            <>
              New here?{' '}
              <button onClick={() => switchMode('signup')} style={{ border: 'none', background: 'none', color: '#7c3aed' }}>
                Create an account
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button onClick={() => switchMode('login')} style={{ border: 'none', background: 'none', color: '#7c3aed' }}>
                Log in
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}