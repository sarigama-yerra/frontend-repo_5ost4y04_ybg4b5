import React from 'react';

export default function DesignNotes() {
  return (
    <section className="mt-10 grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-slate-100 bg-white/80 backdrop-blur p-6 shadow">
        <h3 className="text-sm font-semibold text-slate-700 tracking-wide uppercase mb-3">Moodboard & Palet Warna</h3>
        <p className="text-sm text-slate-600 mb-4">Clean, modern, minimalis, nuansa instansi pemerintah + layanan kesehatan. Dominan ungu, hijau mint, dan putih.</p>
        <div className="flex gap-3">
          {[
            { name: 'Unguu Inti', hex: '#6E59D9' },
            { name: 'Mint', hex: '#34D399' },
            { name: 'Ungu Muda', hex: '#E9D5FF' },
            { name: 'Putih', hex: '#FFFFFF' },
            { name: 'Slate', hex: '#64748B' },
          ].map((c) => (
            <div key={c.hex} className="text-center">
              <div className="h-10 w-10 rounded-lg border" style={{ backgroundColor: c.hex }} />
              <div className="mt-1 text-[10px] text-slate-600">{c.hex}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-white/80 backdrop-blur p-6 shadow">
        <h3 className="text-sm font-semibold text-slate-700 tracking-wide uppercase mb-3">Tipografi & Komponen</h3>
        <ul className="text-sm text-slate-600 list-disc ml-5 space-y-1">
          <li>Heading: Inter/Manrope, 600–700; Body: Inter/IBM Plex Sans</li>
          <li>Komponen: kartu login, tombol primer gradien, field dengan radius 12–14px</li>
          <li>Iconografi ringan, outline; gunakan status warna untuk feedback</li>
        </ul>
      </div>

      <div className="rounded-2xl border border-slate-100 bg-white/80 backdrop-blur p-6 shadow md:col-span-2">
        <h3 className="text-sm font-semibold text-slate-700 tracking-wide uppercase mb-4">Catatan UX</h3>
        <ul className="text-sm text-slate-600 grid sm:grid-cols-2 gap-2">
          <li>Validasi real-time dan pesan error jelas di bawah field.</li>
          <li>Loading state pada tombol login dengan spinner.</li>
          <li>Toggle tampilan password (ikon mata).</li>
          <li>Captcha dengan tombol refresh.</li>
          <li>Fokus jelas dan aksesibilitas: ring ungu, label eksplisit.</li>
          <li>Responsif dari mobile ke desktop; kartu tetap fokus.</li>
        </ul>
      </div>
    </section>
  );
}
