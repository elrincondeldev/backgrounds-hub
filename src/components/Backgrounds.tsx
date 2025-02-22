// Minimal Light Backgrounds
export const MinimalLight = () => {
  return (
    <div className="absolute inset-0 z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
    </div>
  );
};

export const MinimalLightWithNoise = () => {
  return (
    <div className="absolute inset-0 z-10 h-full w-full bg-[#fafafa] [background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')]" />
  );
};

export const MinimalLightGradient = () => {
  return (
    <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-br from-[#fafafa] to-[#f0f0f0]" />
  );
};

export const MinimalLightSpotlight = () => {
  return (
    <div className="absolute inset-0 z-10 h-full w-full bg-[#fafafa]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#ffffff,transparent)]" />
    </div>
  );
};

// Grid Backgrounds
export const MinimalGrid = () => {
  return (
    <div className="absolute inset-0 z-10 h-full w-full bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.07)_1px,transparent_1px)] bg-[size:24px_24px]" />
    </div>
  );
};

export const MinimalDarkGrid = () => {
  return (
    <div className="absolute inset-0 z-10 h-full w-full bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
    </div>
  );
};

// Dot Patterns
export const MinimalDots = () => {
  return (
    <div className="absolute inset-0 z-10 h-full w-full bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:16px_16px]" />
    </div>
  );
};

export const MinimalDarkDots = () => {
  return (
    <div className="absolute inset-0 z-10 h-full w-full bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px]" />
    </div>
  );
};

// Gradient Backgrounds
export const MinimalGradientSubtle = () => {
  return (
    <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-br from-white to-[#f5f5f5]" />
  );
};

// Spotlight Patterns
export const MinimalSpotlightPattern = () => {
  return (
    <div className="absolute inset-0 z-10 h-full w-full bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100%,#e5e7eb,transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.07)_1px,transparent_1px)] bg-[size:32px_32px]" />
    </div>
  );
};

export const MinimalDarkSpotlightPattern = () => {
  return (
    <div className="absolute inset-0 z-10 h-full w-full bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100%,#1a1a1a,transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
    </div>
  );
};

// Soft Gradients
export const SoftGradientBlue = () => {
  return (
    <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-br from-blue-50 to-white" />
  );
};

export const SoftGradientGray = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-gray-50 to-white" />
  );
};

// Vignette Effect
export const MinimalVignette = () => {
  return (
    <div className="absolute inset-0 z-10 h-full w-full bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.05)_100%)]" />
    </div>
  );
};

export const MinimalLightGrid = () => {
  return (
    <div className="absolute inset-0 z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
    </div>
  );
};
