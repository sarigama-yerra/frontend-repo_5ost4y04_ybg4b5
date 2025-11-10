import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <div className="relative w-full h-[260px] sm:h-[360px] md:h-[420px] lg:h-[520px] overflow-hidden rounded-2xl shadow-inner">
      <Spline
        scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
    </div>
  );
}
