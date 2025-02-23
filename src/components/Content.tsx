import Buttons from "./Buttons";
import { useBackgroundStore } from "../store/backgroundStore";

// Minimal Dark Backgrounds
import {
  MinimalLight,
  MinimalLightWithNoise,
  MinimalLightGradient,
  MinimalLightSpotlight,
  MinimalGrid,
  MinimalDarkGrid,
  MinimalDots,
  MinimalDarkDots,
  MinimalGradientSubtle,
  MinimalSpotlightPattern,
  MinimalDarkSpotlightPattern,
  SoftGradientBlue,
  SoftGradientGray,
  MinimalVignette,
  AuroraBorealis,
  CrystalMorphism,
  NebulaBackground,
  HolographicWave,
  GeometricArt,
  LiquidGradient,
  CyberGrid,
  FrostedGlass,
  RainbowMesh,
  NeonPulse,
} from "./Backgrounds";

const backgrounds = [
  {
    component: MinimalLight,
    name: "MinimalLight",
    displayName: "Minimal Light",
    isDark: false,
  },
  {
    component: MinimalLightWithNoise,
    name: "MinimalLightWithNoise",
    displayName: "Minimal Light with Noise",
    isDark: false,
  },
  {
    component: MinimalLightGradient,
    name: "MinimalLightGradient",
    displayName: "Minimal Light Gradient",
    isDark: false,
  },
  {
    component: MinimalLightSpotlight,
    name: "MinimalLightSpotlight",
    displayName: "Minimal Light Spotlight",
    isDark: false,
  },
  {
    component: MinimalGrid,
    name: "MinimalGrid",
    displayName: "Minimal Grid",
    isDark: false,
  },
  {
    component: MinimalDarkGrid,
    name: "MinimalDarkGrid",
    displayName: "Minimal Dark Grid",
    isDark: true,
  },
  {
    component: MinimalDots,
    name: "MinimalDots",
    displayName: "Minimal Dots",
    isDark: false,
  },
  {
    component: MinimalDarkDots,
    name: "MinimalDarkDots",
    displayName: "Minimal Dark Dots",
    isDark: true,
  },
  {
    component: MinimalGradientSubtle,
    name: "MinimalGradientSubtle",
    displayName: "Minimal Gradient Subtle",
    isDark: false,
  },
  {
    component: MinimalSpotlightPattern,
    name: "MinimalSpotlightPattern",
    displayName: "Minimal Spotlight Pattern",
    isDark: false,
  },
  {
    component: MinimalDarkSpotlightPattern,
    name: "MinimalDarkSpotlightPattern",
    displayName: "Minimal Dark Spotlight Pattern",
    isDark: true,
  },
  {
    component: SoftGradientBlue,
    name: "SoftGradientBlue",
    displayName: "Soft Gradient Blue",
    isDark: false,
  },
  {
    component: SoftGradientGray,
    name: "SoftGradientGray",
    displayName: "Soft Gradient Gray",
    isDark: false,
  },
  {
    component: MinimalVignette,
    name: "MinimalVignette",
    displayName: "Minimal Vignette",
    isDark: false,
  },
  {
    component: CyberGrid,
    name: "DarkCyberGrid",
    displayName: "Cyber Grid",
    isDark: false,
  },
  {
    component: FrostedGlass,
    name: "FrostedGlass",
    displayName: "Frosted Glass",
    isDark: false,
  },
  {
    component: RainbowMesh,
    name: "RainbowMesh",
    displayName: "Rainbow Mesh",
    isDark: false,
  },
  {
    component: NeonPulse,
    name: "DarkNeonPulse",
    displayName: "Neon Pulse",
    isDark: false,
  },
  {
    component: AuroraBorealis,
    name: "DarkAuroraBorealis",
    displayName: "Aurora Borealis",
    isDark: false,
  },
  {
    component: CrystalMorphism,
    name: "CrystalMorphism",
    displayName: "Crystal Morphism",
    isDark: false,
  },
  {
    component: NebulaBackground,
    name: "DarkNebulaBackground",
    displayName: "Nebula Background",
    isDark: false,
  },
  {
    component: HolographicWave,
    name: "DarkHolographicWave",
    displayName: "Holographic Wave",
    isDark: false,
  },
  {
    component: GeometricArt,
    name: "GeometricArt",
    displayName: "Geometric Art",
    isDark: false,
  },
  {
    component: LiquidGradient,
    name: "DarkLiquidGradient",
    displayName: "Liquid Gradient",
    isDark: false,
  },
];

function Content() {
  const { backgroundName } = useBackgroundStore();

  return (
    <section className="overflow-hidden px-4 py-20 md:px-10 w-full">
      <div className="grid grid-cols-1 gap-6 pb-6 md:grid-cols-2 lg:grid-cols-4">
        {backgrounds.map(
          ({ component: Background, name, displayName, isDark }) => (
            <div
              key={name}
              className={
                backgroundName.includes("Dark")
                  ? "group relative min-h-[300px] w-full overflow-hidden rounded-xl ring-1 ring-slate-200/50"
                  : "group relative min-h-[300px] w-full overflow-hidden rounded-xl ring-1 ring-slate-900/10"
              }
            >
              <div className="absolute left-4 top-4 z-20">
                <Buttons component={<Background />} name={name} />
              </div>
              <div className="absolute bottom-4 left-4 z-10 opacity-0 transition-opacity group-hover:opacity-100">
                <p
                  className={`text-xs font-medium px-2 py-1 rounded-md ${
                    isDark
                      ? "text-gray-200 bg-black/50"
                      : "text-gray-700 bg-white/50"
                  }`}
                >
                  {displayName}
                </p>
              </div>
              <Background />
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Content;
