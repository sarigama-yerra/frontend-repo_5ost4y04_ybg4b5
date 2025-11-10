import React from 'react';
import HeaderBrand from './components/HeaderBrand';
import Hero3D from './components/Hero3D';
import LoginForm from './components/LoginForm';
import DesignNotes from './components/DesignNotes';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-emerald-50 text-slate-800">
      <HeaderBrand />

      <main className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <section className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-800">
              Portal Login DIGIS-ILP
            </h1>
            <p className="text-slate-600 max-w-prose">
              Sistem informasi puskesmas yang aman, modern, dan minimalis. Silakan masuk untuk mengakses layanan administrasi dan rekam pelayanan.
            </p>
            <LoginForm />
          </div>
          <div className="order-1 lg:order-2">
            <Hero3D />
          </div>
        </section>

        <DesignNotes />

        <footer className="py-10 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} DIGIS-ILP • Puskesmas. Seluruh hak dilindungi.
        </footer>
      </main>
    </div>
  );
}

export default App;
