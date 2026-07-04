import { useState } from "react";
import { ArrowUpRight, Camera, Sparkles, Palette, Layers, Compass, Check, Aperture, Eye, MessageSquare, Play, BarChart2 } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

interface ServicePreset {
  id: string;
  name: string;
  description: string;
}

const SERVICES: ServicePreset[] = [
  { id: "branding", name: "Branding", description: "Creating premium identities, logo guidelines, and brand design systems." },
  { id: "strategy", name: "Business Strategy Development", description: "Mapping long-term market placement and strategic direction." },
  { id: "research", name: "Market Research & Analysis", description: "Gathering targeted consumer insights and demographic intelligence." },
  { id: "graphics", name: "Graphics", description: "High-end vector layouts, publication designs, and interface assets." },
  { id: "photography", name: "Product Photography", description: "Studio-lit asset creation with professional color grading." },
  { id: "videos", name: "Brand Videos", description: "Narrative-driven ads, reels, and video packages." },
  { id: "models", name: "Brand Ambassador & Models", description: "Talent curation and model casting for brand representation." },
  { id: "marketing", name: "Digital Marketing", description: "Strategic campaign routing, social outreach, and media buying." },
  { id: "satellite", name: "Satellite & Visual Media", description: "Broadcasting layouts, dynamic overlays, and visual communications." },
];

const Exmedia = () => {
  const revealRef = useReveal<HTMLDivElement>();

  // State for Brand Presets (Section 1)
  const [brandPreset, setBrandPreset] = useState<"luxe" | "cyber" | "organic">("luxe");

  const getBrandDetails = () => {
    switch (brandPreset) {
      case "luxe":
        return {
          font: "font-serif",
          accentColor: "text-[#D4AF37]", // Metallic gold
          bgColor: "bg-[#1C1810]",
          borderColor: "border-[#D4AF37]/30",
          logoText: "A U R U M",
          tagline: "ELEGANCE IN REFINEMENT",
        };
      case "cyber":
        return {
          font: "font-mono",
          accentColor: "text-[#00FFCC]", // Neon teal
          bgColor: "bg-[#091515]",
          borderColor: "border-[#00FFCC]/30",
          logoText: "N E O X",
          tagline: "HYPER-SPEED BRAND ENGINE",
        };
      case "organic":
        return {
          font: "font-sans",
          accentColor: "text-[#98FF98]", // Mint green
          bgColor: "bg-[#0F1411]",
          borderColor: "border-[#98FF98]/30",
          logoText: "E A R T H",
          tagline: "CONSCIOUS IDENTITY CORE",
        };
    }
  };

  const brand = getBrandDetails();

  // State for Graphics blend simulator (Section 2)
  const [blendMode, setBlendMode] = useState<"multiply" | "screen" | "difference" | "normal">("difference");

  // State for Campaign growth simulator (Section 3)
  const [creativeImpact, setCreativeImpact] = useState<number>(60);

  // State for Camera viewfinder simulator (Section 4)
  const [shutterFlash, setShutterFlash] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const photos = [
    "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
  ];

  const triggerCameraFlash = () => {
    setShutterFlash(true);
    setTimeout(() => setShutterFlash(false), 200);
    setPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  // State for Services selector at bottom
  const [selectedService, setSelectedService] = useState<string>("branding");

  return (
    <div ref={revealRef} className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden">
      {/* Dynamic Aesthetic Background Gradients */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[30%] right-[-10%] w-[500px] h-[500px] bg-white/2 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Hero Section */}
      <section id="top" className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-5 sm:px-8 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-auto mb-auto pt-6">
          
          {/* Main Title & Lede */}
          <div data-reveal className="lg:col-span-8 flex flex-col justify-center space-y-8">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-8 bg-muted-foreground" />
              exmedia — creative studio
            </div>

            <div className="space-y-4">
              <h1 className="text-balance font-display text-5xl sm:text-7xl lg:text-8xl font-normal leading-[0.9] tracking-tight uppercase">
                Artistic Direction. <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-accent via-white to-white/30">
                  Flawless Brand.
                </span>
              </h1>
            </div>

            <p className="max-w-2xl text-lg sm:text-xl leading-relaxed text-muted-foreground">
              Make your business stand out through strategic branding and creative excellence. We elevate companies into culture-defining brands through premium visuals, precise art direction, and structured campaigns.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#branding-studio"
                className="group border border-accent bg-accent text-background px-6 py-3.5 text-sm font-mono uppercase tracking-wider font-semibold transition-colors duration-300 hover:bg-transparent hover:text-accent rounded-none"
              >
                Enter Studio
              </a>
              <a
                href="#services"
                className="group border border-white/15 bg-white/5 text-white px-6 py-3.5 text-sm font-mono uppercase tracking-wider font-semibold transition-all duration-300 hover:border-white hover:bg-white hover:text-background rounded-none"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Interactive Hero Art Piece */}
          <div data-reveal className="lg:col-span-4 flex items-center justify-center">
            <div className="relative w-full aspect-square border border-white/10 p-6 flex flex-col justify-between bg-white/[0.02] backdrop-blur-md rounded-none">
              <div className="flex justify-between items-start font-mono text-[10px] text-muted-foreground">
                <span>CREATIVE_SYSTEM: RUNNING</span>
                <span>[EX_MED_V2]</span>
              </div>

              {/* Dynamic Abstract Art Box */}
              <div className="relative w-full h-[60%] border border-white/5 bg-background overflow-hidden flex items-center justify-center rounded-none">
                <div className="absolute inset-0 bg-radial-gradient from-accent/20 via-transparent to-transparent opacity-60 animate-pulse" />
                <div className="absolute w-[80%] h-[80%] border border-dashed border-white/10 flex items-center justify-center">
                  <div className="text-center font-display uppercase tracking-[0.3em] text-xs font-semibold text-white/40">
                    EXMEDIA STUDIO
                  </div>
                </div>
                {/* Accent corner brackets */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-accent" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-accent" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-accent" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-accent" />
              </div>

              <div className="space-y-1">
                <div className="font-mono text-xs text-white">PLAN. EXECUTE. GROW.</div>
                <div className="font-mono text-[10px] text-muted-foreground">CRITICAL METRIC: 100% BRAND RECOGNITION</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Nav Bar */}
        <div data-reveal className="grid grid-cols-2 md:grid-cols-4 border border-white/10 bg-white/2 divide-x divide-y md:divide-y-0 divide-white/10 mt-16 font-mono text-xs uppercase tracking-wider">
          <a href="#branding-studio" className="p-5 flex items-center justify-between hover:bg-white/5 transition-colors group">
            <span>01 // Brand Designer</span>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
          </a>
          <a href="#visuals" className="p-5 flex items-center justify-between hover:bg-white/5 transition-colors group">
            <span>02 // Visual Composer</span>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
          </a>
          <a href="#strategy-core" className="p-5 flex items-center justify-between hover:bg-white/5 transition-colors group">
            <span>03 // Brand Strategist</span>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
          </a>
          <a href="#photography-studio" className="p-5 flex items-center justify-between hover:bg-white/5 transition-colors group">
            <span>04 // Lens Simulator</span>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
          </a>
        </div>
      </section>

      {/* CORE SECTIONS */}

      {/* 01. Branding Section */}
      <section id="branding-studio" className="relative border-t border-white/10 scroll-mt-20 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text content */}
            <div data-reveal className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase text-accent">[ 01 // STRATEGIC BRANDING ]</span>
                <span className="h-px flex-grow bg-white/10" />
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal uppercase leading-none">
                Identity Design
              </h2>

              <h3 className="font-display text-2xl sm:text-3xl font-medium text-white/95">
                Transform Your Vision Into a Powerful Brand.
              </h3>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Make your business stand out through strategic branding and creative excellence today. Distinctive branding helps businesses connect, engage, and grow with greater confidence.
              </p>

              <div className="border border-white/5 bg-white/2 p-4 font-mono text-xs">
                <span className="text-white font-bold">BRAND PILLARS:</span> Clarity, Connection, Expansion, Aesthetic Impact.
              </div>
            </div>

            {/* Right Column: Brand Preset Simulator Widget */}
            <div data-reveal className="lg:col-span-6">
              <div className="border border-white/10 bg-card p-6 space-y-6 relative rounded-none">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-accent" />
                    <span className="font-mono text-xs uppercase text-white font-bold">IDENTITY.ARCHITECT</span>
                  </div>
                  
                  {/* Preset Selector */}
                  <div className="flex border border-white/15 bg-background p-0.5 rounded-none font-mono text-[9px]">
                    <button
                      onClick={() => setBrandPreset("luxe")}
                      className={`px-2 py-1 cursor-pointer rounded-none transition-colors uppercase ${brandPreset === "luxe" ? "bg-white text-background font-bold" : "text-muted-foreground hover:text-white"}`}
                    >
                      Luxury
                    </button>
                    <button
                      onClick={() => setBrandPreset("cyber")}
                      className={`px-2 py-1 cursor-pointer rounded-none transition-colors uppercase ${brandPreset === "cyber" ? "bg-white text-background font-bold" : "text-muted-foreground hover:text-white"}`}
                    >
                      Cyber
                    </button>
                    <button
                      onClick={() => setBrandPreset("organic")}
                      className={`px-2 py-1 cursor-pointer rounded-none transition-colors uppercase ${brandPreset === "organic" ? "bg-white text-background font-bold" : "text-muted-foreground hover:text-white"}`}
                    >
                      Organic
                    </button>
                  </div>
                </div>

                {/* Simulated Business Card Mockup */}
                <div className={`border ${brand.borderColor} ${brand.bgColor} p-8 aspect-16/9 flex flex-col justify-between transition-all duration-500 relative rounded-none`}>
                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 text-[8px] font-mono text-white/25">MOCK_GUIDE // EX_MED</div>
                  <div className="absolute bottom-2 right-2 text-[8px] font-mono text-white/25">SECURE // STABLE</div>

                  <div className="flex justify-between items-start">
                    <div className={`${brand.font} ${brand.accentColor} text-2xl font-bold tracking-[0.25em] transition-all`}>
                      {brand.logoText}
                    </div>
                    <div className="w-4 h-4 bg-white/10 border border-white/20" />
                  </div>

                  <div className="space-y-1 mt-auto">
                    <div className={`font-mono text-[10px] uppercase tracking-widest ${brand.accentColor} font-bold`}>
                      {brand.tagline}
                    </div>
                    <div className="text-[9px] text-white/40 font-mono">
                      IDENTITY GUIDELINES // SYSTEM STYLING
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 p-3 border border-white/10 font-mono text-[10px] text-muted-foreground leading-relaxed">
                  <span className="text-white font-bold">DESIGN PREVIEW:</span> Select presets to test how color systems and typography alter the brand aura.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 02. Creative Visuals Section */}
      <section id="visuals" className="relative border-t border-white/10 scroll-mt-20 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Graphics Composer Simulator */}
            <div data-reveal className="lg:col-span-6 lg:order-2">
              <div className="border border-white/10 bg-card p-6 space-y-6 relative rounded-none">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-accent" />
                    <span className="font-mono text-xs uppercase text-white font-bold">GRAPHIC.COMPOSER</span>
                  </div>
                  
                  {/* Blend Mode Buttons */}
                  <div className="flex border border-white/15 bg-background p-0.5 rounded-none font-mono text-[9px]">
                    {(["normal", "difference", "multiply", "screen"] as const).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setBlendMode(mode)}
                        className={`px-2 py-1 cursor-pointer rounded-none transition-colors uppercase ${blendMode === mode ? "bg-white text-background font-bold" : "text-muted-foreground hover:text-white"}`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated Canvas block */}
                <div className="bg-background border border-white/10 p-8 h-[240px] flex items-center justify-center relative overflow-hidden rounded-none">
                  {/* Grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />

                  {/* Dynamic Blend Shapes */}
                  <div className="relative w-40 h-40">
                    <div className="absolute top-0 left-0 w-28 h-28 bg-[#FF007F] mix-blend-screen opacity-80 transition-all duration-300" />
                    <div 
                      className={`absolute bottom-0 right-0 w-28 h-28 bg-accent opacity-85 transition-all duration-300`} 
                      style={{ mixBlendMode: blendMode }}
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-white/40 flex items-center justify-center font-mono text-[10px] text-white">
                      [ EX ]
                    </div>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-muted-foreground flex justify-between">
                  <span>ACTIVE_BLEND: {blendMode.toUpperCase()}</span>
                  <span>SYSTEM: FULLY RENDERED</span>
                </div>
              </div>
            </div>

            {/* Right Column: Text content */}
            <div data-reveal className="lg:col-span-6 lg:order-1 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase text-accent">[ 02 // CREATIVE VISUALS ]</span>
                <span className="h-px flex-grow bg-white/10" />
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal uppercase leading-none">
                Visual Art
              </h2>

              <h3 className="font-display text-2xl sm:text-3xl font-medium text-white/95">
                Elevate your business with creative visuals
              </h3>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Design impactful visuals that attract customers and drive meaningful business success. Enhance brand recognition, engagement, and business growth effortlessly.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="border border-white/5 bg-white/2 p-4 font-mono text-xs">
                  <div className="text-white font-semibold">ASSET VALUE</div>
                  <div className="text-muted-foreground mt-1">High-quality custom design matrices.</div>
                </div>
                <div className="border border-white/5 bg-white/2 p-4 font-mono text-xs">
                  <div className="text-white font-semibold">RECOGNITION</div>
                  <div className="text-muted-foreground mt-1">Stand out distinctively in saturated space.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 03. Plan & Execute Section */}
      <section id="strategy-core" className="relative border-t border-white/10 scroll-mt-20 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text content */}
            <div data-reveal className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase text-accent">[ 03 // BRAND STRATEGY ]</span>
                <span className="h-px flex-grow bg-white/10" />
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal uppercase leading-none">
                Art Direction
              </h2>

              <h3 className="font-display text-2xl sm:text-3xl font-medium text-white/95">
                Plan With Purpose, Execute With Precision, And Grow Without Limits.
              </h3>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Empower businesses with data-driven strategies, flawless execution, and measurable growth for lasting success. We bridge the gap between creative ambition and calculated business returns.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="border border-white/5 bg-white/2 p-4 font-mono text-xs space-y-1">
                  <div className="text-white font-semibold">DATA ORIENTED</div>
                  <div className="text-muted-foreground">Creative decisions backed by research.</div>
                </div>
                <div className="border border-white/5 bg-white/2 p-4 font-mono text-xs space-y-1">
                  <div className="text-white font-semibold">EXECUTION SPEED</div>
                  <div className="text-muted-foreground">Rigorous pipeline delivery.</div>
                </div>
              </div>
            </div>

            {/* Right Column: Campaign Growth Simulator */}
            <div data-reveal className="lg:col-span-6">
              <div className="border border-white/10 bg-card p-6 space-y-6 relative rounded-none">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-accent" />
                    <span className="font-mono text-xs uppercase text-white font-bold">CAMPAIGN.GROWTH_SIMULATOR</span>
                  </div>
                  <div className="text-[10px] font-mono text-accent">ACTIVE RUN</div>
                </div>

                {/* Slider bar */}
                <div className="space-y-4">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-muted-foreground">CREATIVE INPUT SCALE:</span>
                    <span className="text-white font-bold">{creativeImpact}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={creativeImpact}
                    onChange={(e) => setCreativeImpact(Number(e.target.value))}
                    className="w-full accent-accent h-1 bg-white/10 appearance-none outline-none cursor-pointer rounded-none"
                  />
                </div>

                {/* Growth stats simulator */}
                <div className="grid grid-cols-3 gap-2 font-mono text-center">
                  <div className="border border-white/10 bg-background p-3 space-y-1 rounded-none">
                    <div className="text-[9px] text-muted-foreground uppercase">Ad Recall</div>
                    <div className="text-base text-white font-bold">+{Math.round(creativeImpact * 1.8)}%</div>
                  </div>
                  <div className="border border-white/10 bg-background p-3 space-y-1 rounded-none">
                    <div className="text-[9px] text-muted-foreground uppercase">Brand Trust</div>
                    <div className="text-base text-accent font-bold">+{Math.round(creativeImpact * 1.2)}%</div>
                  </div>
                  <div className="border border-white/10 bg-background p-3 space-y-1 rounded-none">
                    <div className="text-[9px] text-muted-foreground uppercase">Conv. ROI</div>
                    <div className="text-base text-white font-bold">{(1.5 + (creativeImpact / 20)).toFixed(1)}x</div>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-muted-foreground bg-white/5 p-2.5 border border-white/10">
                  <span className="text-accent font-bold">STRATEGY NOTE:</span> Push the slider to see how premium design assets scale customer recall metrics and conversion returns.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 04. Photography & Videography Section */}
      <section id="photography-studio" className="relative border-t border-white/10 scroll-mt-20 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Shutter Viewfinder Simulator */}
            <div data-reveal className="lg:col-span-6 lg:order-2">
              <div className="border border-white/10 bg-card p-6 space-y-6 relative rounded-none">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Aperture className="w-4 h-4 text-accent" />
                    <span className="font-mono text-xs uppercase text-white font-bold">CAMERA.LENS_CONTROL</span>
                  </div>
                  
                  <button
                    onClick={triggerCameraFlash}
                    className="bg-accent text-background font-mono text-[10px] uppercase font-bold py-1.5 px-3 border border-accent hover:bg-transparent hover:text-accent transition-colors rounded-none cursor-pointer"
                  >
                    [ SNAP CAMERA ]
                  </button>
                </div>

                {/* Lens Screen Area */}
                <div className="bg-black border border-white/10 relative overflow-hidden aspect-16/10 rounded-none">
                  {/* Photo itself */}
                  <img
                    src={photos[photoIndex]}
                    alt="Simulated creative photography"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                  />

                  {/* Viewfinder crosshairs */}
                  <div className="absolute inset-4 border border-white/20 pointer-events-none" />
                  <div className="absolute top-1/2 left-4 right-4 h-px bg-white/10 pointer-events-none" />
                  <div className="absolute left-1/2 top-4 bottom-4 w-px bg-white/10 pointer-events-none" />

                  {/* Corner focus brackets */}
                  <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-white pointer-events-none" />
                  <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-white pointer-events-none" />
                  <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-white pointer-events-none" />
                  <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-white pointer-events-none" />

                  {/* Shutter flash effect */}
                  <div className={`absolute inset-0 bg-white transition-opacity duration-200 pointer-events-none ${shutterFlash ? "opacity-100" : "opacity-0"}`} />

                  {/* Overlaid stats */}
                  <div className="absolute bottom-6 inset-x-6 flex justify-between font-mono text-[9px] text-white bg-black/60 px-2 py-1 backdrop-blur-xs">
                    <span>F/2.8</span>
                    <span>1/250s</span>
                    <span>ISO 400</span>
                    <span className="text-accent animate-pulse">REC_RAW</span>
                  </div>
                </div>

                <div className="text-[10px] text-muted-foreground font-mono flex justify-between">
                  <span>SHOT_INDEX: 0{photoIndex + 1} / 03</span>
                  <span>LENS: EX_CINE_50MM</span>
                </div>
              </div>
            </div>

            {/* Right Column: Text content */}
            <div data-reveal className="lg:col-span-6 lg:order-1 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase text-accent">[ 04 // PROFESSIONAL IMAGING ]</span>
                <span className="h-px flex-grow bg-white/10" />
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal uppercase leading-none">
                Imaging Studio
              </h2>

              <h3 className="font-display text-2xl sm:text-3xl font-medium text-white/95">
                Dynamic Visuals & Professional Imaging
              </h3>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Create unforgettable first impressions with premium photography. Bring every product detail into focus with professional videography and stunning digital composition.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="border border-white/5 bg-white/2 p-4 font-mono text-xs space-y-1">
                  <div className="text-white font-semibold">PRECISE LIGHTING</div>
                  <div className="text-muted-foreground">Studio capture with expert editing.</div>
                </div>
                <div className="border border-white/5 bg-white/2 p-4 font-mono text-xs space-y-1">
                  <div className="text-white font-semibold">NARRATIVE CINES</div>
                  <div className="text-muted-foreground">High-definition storytelling videos.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ALL SERVICES MATRIX */}
      <section id="services" className="relative border-t border-white/10 py-24 sm:py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          
          <div data-reveal className="max-w-2xl mb-16 space-y-4">
            <span className="font-mono text-xs uppercase text-accent">[ OUR CORE SERVICES ]</span>
            <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight">
              Design & Marketing Capabilities
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Click a capability below to view details and scope definition.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border border-white/10 rounded-none bg-white/2 overflow-hidden">
            
            {/* Category Selector Side Menu */}
            <div className="lg:col-span-5 border-r border-white/10 flex flex-col divide-y divide-white/10 font-mono text-xs uppercase tracking-wider bg-black/40">
              {SERVICES.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedService(s.id)}
                  className={`p-5 text-left flex justify-between items-center transition-colors cursor-pointer rounded-none ${selectedService === s.id ? "bg-accent text-background font-bold" : "text-white/70 hover:bg-white/5"}`}
                >
                  <span>0{idx + 1} // {s.name}</span>
                  <ArrowUpRight className={`w-4 h-4 ${selectedService === s.id ? "text-background" : "text-muted-foreground"}`} />
                </button>
              ))}
            </div>

            {/* Service details panel */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between min-h-[350px]">
              <div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">SERVICE_DETAILS // {selectedService.toUpperCase()}</span>
                  <span className="text-[10px] font-mono text-accent">[ BRAND LEVEL ]</span>
                </div>

                <div className="space-y-6">
                  <h3 className="font-display text-2xl sm:text-4xl text-white font-normal uppercase">
                    {SERVICES.find(s => s.id === selectedService)?.name}
                  </h3>
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                    {SERVICES.find(s => s.id === selectedService)?.description}
                  </p>
                  
                  {/* Detailed features of selected */}
                  <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 font-mono text-xs text-white/80">
                      <Check className="w-4 h-4 text-accent shrink-0" />
                      <span>Custom Design Audits</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-xs text-white/80">
                      <Check className="w-4 h-4 text-accent shrink-0" />
                      <span>Consistent Guidelines</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-xs text-white/80">
                      <Check className="w-4 h-4 text-accent shrink-0" />
                      <span>Complete Asset Delivery</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-xs text-white/80">
                      <Check className="w-4 h-4 text-accent shrink-0" />
                      <span>Flexible Deployment Support</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 mt-8 flex justify-between items-center text-xs font-mono text-muted-foreground">
                <span>ESTIMATION: CUSTOM SCOPE</span>
                <span className="text-white flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  PREMIUM QUALITY ASSURED
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="relative border-t border-white/10 py-24 sm:py-32 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto px-5 text-center space-y-8">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-none">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Scale Your Brand, Grow Beyond Limits</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-normal uppercase leading-tight">
            Increase engagement, conversions, and revenue.
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Increase engagement, conversions, and revenue with expert digital marketing. Strengthen your brand presence while achieving sustainable business expansion.
          </p>

          <div className="flex justify-center pt-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 border border-white/15 bg-white text-background px-8 py-4 font-mono text-sm uppercase tracking-wider font-bold hover:border-accent hover:bg-accent hover:text-background transition-all duration-300 rounded-none group"
            >
              <span>explore exmedia</span>
              <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exmedia;
