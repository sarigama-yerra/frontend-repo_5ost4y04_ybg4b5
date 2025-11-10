import React from 'react';
import { Hospital } from 'lucide-react';

export default function HeaderBrand() {
  return (
    <header className="w-full flex items-center justify-between py-4 px-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-purple-600 to-emerald-400 p-[2px]">
          <div className="h-full w-full rounded-[10px] bg-white grid place-items-center">
            <Hospital className="h-6 w-6 text-purple-700" aria-hidden="true" />
          </div>
        </div>
        <div className="leading-tight">
          <div className="text-sm tracking-wider text-purple-700 font-semibold">DIGIS-ILP</div>
          <div className="text-xs text-slate-500">Puskesmas • Dinas Kesehatan</div>
        </div>
      </div>
      <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <span>Aman & Terverifikasi</span>
      </div>
    </header>
  );
}
