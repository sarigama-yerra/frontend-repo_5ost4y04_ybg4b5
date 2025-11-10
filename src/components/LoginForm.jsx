import React, { useState } from 'react';
import { Eye, EyeOff, ShieldCheck, Loader2 } from 'lucide-react';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    const form = new FormData(e.currentTarget);
    const username = form.get('username')?.toString().trim();
    const password = form.get('password')?.toString();
    const captcha = form.get('captcha')?.toString().trim();

    const newErrors = {};
    if (!username) newErrors.username = 'Username wajib diisi';
    if (!password) newErrors.password = 'Password wajib diisi';
    if (!captcha) newErrors.captcha = 'Captcha wajib diisi';

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    // Simulate login flow
    setTimeout(() => {
      setLoading(false);
      setErrors({ captcha: 'Captcha salah. Silakan coba lagi.' });
    }, 1200);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8">
        <div className="flex items-start gap-3 mb-6">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-purple-600 to-emerald-400 grid place-items-center text-white">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-800">Masuk ke DIGIS-ILP</h2>
            <p className="text-sm text-slate-500">Gunakan akun yang terdaftar di puskesmas</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-slate-700">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              className={`mt-1 w-full rounded-xl border bg-white px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-purple-300 ${errors.username ? 'border-red-400' : 'border-slate-200'}`}
              placeholder="nip.pegawai / email"
            />
            {errors.username && (
              <p className="mt-1 text-xs text-red-600">{errors.username}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
            <div className={`mt-1 flex items-center rounded-xl border bg-white px-3 py-2 focus-within:ring-2 focus-within:ring-purple-300 ${errors.password ? 'border-red-400' : 'border-slate-200'}`}>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                className="w-full text-sm outline-none"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="ml-2 text-slate-500 hover:text-slate-700"
                aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-red-600">{errors.password}</p>
            )}
          </div>

          <div>
            <label htmlFor="captcha" className="block text-sm font-medium text-slate-700">Captcha</label>
            <div className={`mt-1 grid grid-cols-3 gap-2`}>
              <div className="col-span-2">
                <input
                  id="captcha"
                  name="captcha"
                  type="text"
                  className={`w-full rounded-xl border bg-white px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-purple-300 ${errors.captcha ? 'border-red-400' : 'border-slate-200'}`}
                  placeholder="Masukkan kode"
                />
                {errors.captcha && (
                  <p className="mt-1 text-xs text-red-600">{errors.captcha}</p>
                )}
              </div>
              <button type="button" className="col-span-1 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 text-sm font-medium flex items-center justify-center">↻</button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-xl bg-gradient-to-r from-purple-600 to-emerald-400 text-white font-semibold py-2.5 shadow hover:opacity-95 active:opacity-90 disabled:opacity-60"
          >
            {loading ? (
              <span className="inline-flex items-center justify-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin" /> Memeriksa...
              </span>
            ) : (
              'Masuk'
            )}
          </button>

          <p className="text-xs text-slate-500 mt-2 text-center">Dengan masuk, Anda menyetujui kebijakan keamanan data Puskesmas.</p>
        </form>
      </div>
    </div>
  );
}
