// Minimal Light Backgrounds
export const MinimalLight = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
    </div>
  );
};

export const MinimalLightWithNoise = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-[#fafafa] [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')]" />
  );
};

export const MinimalLightGradient = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-[#fafafa] to-[#f0f0f0]" />
  );
};

export const MinimalLightSpotlight = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-[#fafafa]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#ffffff,transparent)]" />
    </div>
  );
};

// Grid Backgrounds
export const MinimalGrid = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.07)_1px,transparent_1px)] bg-[size:24px_24px]" />
    </div>
  );
};

export const MinimalDarkGrid = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
    </div>
  );
};

// Dot Patterns
export const MinimalDots = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:16px_16px]" />
    </div>
  );
};

export const MinimalDarkDots = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.20)_1px,transparent_1px)] bg-[size:16px_16px]" />
    </div>
  );
};

// Gradient Backgrounds
export const MinimalGradientSubtle = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-white to-[#f5f5f5]" />
  );
};

// Spotlight Patterns
export const MinimalSpotlightPattern = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100%,#e5e7eb,transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.07)_1px,transparent_1px)] bg-[size:32px_32px]" />
    </div>
  );
};

export const MinimalDarkSpotlightPattern = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100%,#1a1a1a,transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
    </div>
  );
};

// Soft Gradients
export const SoftGradientBlue = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-50 to-white" />
  );
};

export const SoftGradientGray = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-gray-50 to-white" />
  );
};

// Vignette Effect
export const MinimalVignette = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.05)_100%)]" />
    </div>
  );
};

export const MinimalLightGrid = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
    </div>
  );
};

// Nuevos Backgrounds Espectaculares

// Aurora Boreal Effect
export const AuroraBorealis = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,#3b82f6_0deg,#10b981_72deg,#6366f1_144deg,#8b5cf6_216deg,#ec4899_288deg,#3b82f6_360deg)] animate-[spin_4s_linear_infinite] opacity-50 blur-[100px]" />
      <div className="absolute inset-0 bg-slate-900 opacity-75" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_-100%,#ffffff10,transparent)]" />
    </div>
  );
};

// Cristal Morphism
export const CrystalMorphism = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_-30%_100%,#7dd3fc40,transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_130%_-30%,#818cf840,transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
    </div>
  );
};

// Nebula Effect
export const NebulaBackground = () => {
  return (
    <div className="absolute inset-0  h-full w-full bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_40%_40%,#4c1d95,transparent)] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_60%_60%,#1d4ed8,transparent)] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_900px_at_50%_50%,#0f172a,transparent)] opacity-40" />
      <div className="absolute inset-0 [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] opacity-50" />
    </div>
  );
};

// Holographic Wave
export const HolographicWave = () => {
  return (
    <div className="absolute inset-0  h-full w-full bg-gradient-to-br from-black to-slate-900">
      <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#3b82f680_0deg,#10b98180_72deg,#6366f180_144deg,#8b5cf680_216deg,#ec489980_288deg,#3b82f680_360deg)] animate-[spin_3s_linear_infinite] blur-[75px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.07)_2px,transparent_2px)] bg-[size:40px_40px]" />
    </div>
  );
};

// Geometric Art
export const GeometricArt = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-white">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#f0f0f0_0px,#f0f0f0_1px,transparent_2px,transparent_8px)]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,#f0f0f0_0px,#f0f0f0_1px,transparent_2px,transparent_8px)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,#4f46e520,transparent)]" />
    </div>
  );
};

// Liquid Gradient
export const LiquidGradient = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-violet-500 to-indigo-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_0%_0%,#ffffff40,transparent)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_100%_100%,#ffffff30,transparent)] animate-pulse" />
      <div className="absolute inset-0 backdrop-blur-[100px]" />
    </div>
  );
};

// Cyber Grid
export const CyberGrid = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(#00ffff15_1px,transparent_1px),linear-gradient(90deg,#00ffff15_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_300px,#0000ff15,transparent)]" />
      <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-[#ff00ff10] to-transparent" />
    </div>
  );
};

// Frosted Glass
export const FrostedGlass = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-white/30 backdrop-blur-xl">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.3),rgba(255,255,255,0.1))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(255,255,255,0.2),transparent)]" />
      <div className="absolute inset-0 [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] opacity-30" />
    </div>
  );
};

// Rainbow Mesh
export const RainbowMesh = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-white overflow-hidden">
      <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,#ff6b6b,#4ecdc4,#45b7d1,#96c93d,#ff6b6b)] animate-[spin_10s_linear_infinite] blur-[50px] opacity-30" />
      <div className="absolute inset-0 bg-white/80" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(0,0,0,0.05)_1.5px,transparent_1.5px)] bg-[size:30px_30px]" />
    </div>
  );
};

// Neon Pulse
export const NeonPulse = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_-100%,#ff00ff30,transparent)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_200%,#00ffff30,transparent)] animate-pulse" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:100px_100px]" />
    </div>
  );
};

// Cosmic Dust
export const CosmicDust = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_50%,#ffffff10,transparent)] animate-pulse" />
      <div className="absolute inset-0 [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjI1Ii8+PC9zdmc+')] opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_50%,#4c1d9540,transparent)]" />
    </div>
  );
};

// Gradient Waves
export const GradientWaves = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-rose-100 to-teal-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#bae6fd60,transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_300px,#fecdd360,transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_800px,#a5f3fc60,transparent)]" />
    </div>
  );
};

// Matrix Rain
export const MatrixRain = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(0deg,#00ff0015_2px,transparent_2px)] bg-[size:100%_4px] animate-matrix-rain" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,#00ff0008,transparent)]" />
    </div>
  );
};

// Pastel Mesh
export const PastelMesh = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(219,39,119,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(219,39,119,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_50%,#f0abfc20,transparent)]" />
    </div>
  );
};

// Northern Lights
export const NorthernLights = () => {
  return (
    <div className="absolute inset-0 h-full w-full bg-slate-900">
      <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#10b98140_0deg,#3b82f640_90deg,#6366f140_180deg,#8b5cf640_270deg,#10b98140_360deg)] animate-[spin_6s_linear_infinite] blur-[100px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100%,#0f172a80,transparent)]" />
      <div className="absolute inset-0 [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] opacity-30" />
    </div>
  );
};
