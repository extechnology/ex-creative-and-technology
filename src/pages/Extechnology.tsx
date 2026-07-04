import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Globe,
  Cpu,
  Users,
  Terminal,
  Check,
  BarChart,
  Sparkles,
} from "lucide-react";
import { useReveal } from "../hooks/useReveal";

interface LogLine {
  time: string;
  type: "INFO" | "SUCCESS" | "WARN";
  message: string;
}

const Extechnology = () => {
  const revealRef = useReveal<HTMLDivElement>();

  // State for E-Commerce Widget (Websites)
  const [cartStatus, setCartStatus] = useState<
    "idle" | "processing" | "success"
  >("idle");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: any;
    if (cartStatus === "processing") {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setCartStatus("success");
            return 100;
          }
          return prev + 20;
        });
      }, 150);
    }
    return () => clearInterval(interval);
  }, [cartStatus]);

  // State for Applications API Widget
  const [logs, setLogs] = useState<LogLine[]>([
    {
      time: "17:14:02",
      type: "INFO",
      message: "Kernel initialized successfully.",
    },
    {
      time: "17:14:03",
      type: "SUCCESS",
      message: "Connection established with primary DB node.",
    },
    {
      time: "17:14:05",
      type: "INFO",
      message: "Listening for requests on port 8080...",
    },
  ]);
  const [apiCount, setApiCount] = useState(0);

  const handleDispatch = () => {
    const time = new Date().toLocaleTimeString();
    const newLogs: LogLine[] = [
      ...logs,
      {
        time,
        type: "INFO",
        message: `Initiating agent dispatcher #${apiCount + 1}...`,
      },
      {
        time,
        type: "SUCCESS",
        message: `Agent #${apiCount + 1} completed execution. Speed: 12ms.`,
      },
    ];
    setLogs(newLogs.slice(-4));
    setApiCount((prev) => prev + 1);
  };

  // State for CRM Widget
  const [crmDeads, setCrmDeads] = useState([
    { id: 1, client: "Vipin (ExMedia)", value: 5000, stage: "pipeline" },
    { id: 2, client: "Global Habitat", value: 15000, stage: "pipeline" },
    { id: 3, client: "CyberLady Store", value: 22000, stage: "won" },
  ]);

  const moveDeal = (id: number) => {
    setCrmDeads((prev) =>
      prev.map((d) =>
        d.id === id
          ? { ...d, stage: d.stage === "pipeline" ? "won" : "pipeline" }
          : d,
      ),
    );
  };

  const totalWonRevenue = crmDeads
    .filter((d) => d.stage === "won")
    .reduce((sum, d) => sum + d.value, 0);

  // State for Marketing Software Widget
  const [marketingMetric, setMarketingMetric] = useState<
    "traffic" | "conversions" | "roas"
  >("traffic");

  const getMarketingBars = () => {
    switch (marketingMetric) {
      case "traffic":
        return [
          { name: "Q1", value: "35K", height: "h-[35%]", color: "bg-white/40" },
          { name: "Q2", value: "50K", height: "h-[50%]", color: "bg-white/60" },
          { name: "Q3", value: "75K", height: "h-[75%]", color: "bg-white/80" },
          { name: "Q4", value: "120K", height: "h-[95%]", color: "bg-accent" },
        ];
      case "conversions":
        return [
          {
            name: "Q1",
            value: "1.2%",
            height: "h-[20%]",
            color: "bg-white/40",
          },
          {
            name: "Q2",
            value: "2.8%",
            height: "h-[45%]",
            color: "bg-white/60",
          },
          {
            name: "Q3",
            value: "6.2%",
            height: "h-[75%]",
            color: "bg-white/80",
          },
          { name: "Q4", value: "9.5%", height: "h-[95%]", color: "bg-accent" },
        ];
      case "roas":
        return [
          {
            name: "Q1",
            value: "1.5x",
            height: "h-[25%]",
            color: "bg-white/40",
          },
          {
            name: "Q2",
            value: "2.4x",
            height: "h-[48%]",
            color: "bg-white/60",
          },
          {
            name: "Q3",
            value: "3.8x",
            height: "h-[76%]",
            color: "bg-white/80",
          },
          { name: "Q4", value: "5.4x", height: "h-[95%]", color: "bg-accent" },
        ];
    }
  };

  // Tech Explorer State
  const [activeCategory, setActiveCategory] = useState<
    "websites" | "applications" | "crms" | "marketing"
  >("websites");

  const techStacks = {
    websites: [
      { name: "Next.js / React 19", role: "Core SSR / Server Components" },
      { name: "Tailwind CSS v4", role: "Next-gen CSS utility styling" },
      {
        name: "Shopify Storefront",
        role: "Headless e-commerce commerce pipeline",
      },
      { name: "Stripe SDK", role: "Secure globally-distributed checkouts" },
    ],
    applications: [
      {
        name: "Node.js / Express / Bun",
        role: "Ultra-fast response runtime APIs",
      },
      {
        name: "Golang / Python",
        role: "Distributed workers & compute systems",
      },
      {
        name: "PostgreSQL & Redis",
        role: "Persistent structures & cache layers",
      },
      {
        name: "Docker Engine",
        role: "Strict environments & scale controllers",
      },
    ],
    crms: [
      { name: "Salesforce Partner API", role: "Enterprise sync integrations" },
      {
        name: "HubSpot SDK Connector",
        role: "Customer lifecycle data pipelining",
      },
      { name: "PgVector Embeddings", role: "RAG & LLM-driven query databases" },
      {
        name: "Custom Webhook Hubs",
        role: "Immediate, latency-free CRM triggers",
      },
    ],
    marketing: [
      { name: "Segment.io Platform", role: "Central behavioral data engine" },
      {
        name: "Custom Mailing Journeys",
        role: "Automated newsletter & drip engine",
      },
      {
        name: "Google Analytics 4 API",
        role: "Structured event tracking metrics",
      },
      { name: "Amplitude Cohorts", role: "Precise cohort conversion tracking" },
    ],
  };

  return (
    <div
      ref={revealRef}
      className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden"
    >
      {/* Brutalist Tech Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(1_0_0/_4%)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/_4%)_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none z-0" />

      {/* Decorative vertical lines */}
      <div className="absolute left-[8%] top-0 bottom-0 w-px bg-white/5 pointer-events-none hidden lg:block z-0" />
      <div className="absolute right-[8%] top-0 bottom-0 w-px bg-white/5 pointer-events-none hidden lg:block z-0" />

      {/* Hero Section */}
      <section
        id="top"
        className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-5 sm:px-8 max-w-7xl mx-auto z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-auto mb-auto pt-6">
          {/* Main Title & Lede */}
          <div
            data-reveal
            className="lg:col-span-7 flex flex-col justify-center space-y-8"
          >
            {/* Status Tags */}
            {/* <div className="flex flex-wrap gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <span className="border border-white/10 px-2 py-0.5 bg-white/5">[ ENGINE: ACTIVE ]</span>
              <span className="border border-white/10 px-2 py-0.5 bg-white/5">[ SYS_VER: 4.12.0 ]</span>
            </div> */}

            <div className="space-y-5">
              <h1 className="text-balance font-display text-4xl sm:text-6xl lg:text-7xl font-normal leading-[0.95] tracking-tight uppercase">
                extechnology
              </h1>
              <h1 className=" font-display text-xl sm:text-xl lg:text-2xl font-normal leading-[0.95] tracking-tight uppercase">
                Your Website{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-accent via-white to-white/30">
                  Reinvented{" "}
                </span>
              </h1>
            </div>

            <p className="max-w-xl text-xs sm:text-lg leading-6 text-muted-foreground">
              Create intelligent digital experiences that boost productivity,
              conversions, and business performance. We build clean,
              high-performance engines tailored to power modern digital
              enterprises.
            </p>

            {/* Sharp Brutalist CTA Group */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#websites"
                className="group border border-accent bg-accent text-background px-6 py-3.5 text-sm font-mono uppercase tracking-wider font-semibold transition-colors duration-300 hover:bg-transparent hover:text-accent rounded-none"
              >
                Explore Capabilities
              </a>
              <a
                href="#tech-explorer"
                className="group border border-white/15 bg-white/5 text-white px-6 py-3.5 text-sm font-mono uppercase tracking-wider font-semibold transition-all duration-300 hover:border-white hover:bg-white hover:text-background rounded-none"
              >
                View Tech Matrix
              </a>
            </div>
          </div>

          {/* Creative System Overview Monitor Widget */}
          <div data-reveal className="lg:col-span-5 flex items-center">
            <div className="w-full border border-white/10 bg-card/60 backdrop-blur-md p-6 space-y-6 rounded-none relative">
              {/* Corner accent details */}
              <div className="absolute top-0 left-0 w-2 h-px bg-accent" />
              <div className="absolute top-0 left-0 w-px h-2 bg-accent" />
              <div className="absolute top-0 right-0 w-2 h-px bg-accent" />
              <div className="absolute top-0 right-0 w-px h-2 bg-accent" />
              <div className="absolute bottom-0 left-0 w-2 h-px bg-accent" />
              <div className="absolute bottom-0 left-0 w-px h-2 bg-accent" />
              <div className="absolute bottom-0 right-0 w-2 h-px bg-accent" />
              <div className="absolute bottom-0 right-0 w-px h-2 bg-accent" />

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs text-white/50 tracking-wider">
                  CONSOLE // EXTECH_SYS
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[10px] text-emerald-500">
                    SYS_ONLINE
                  </span>
                </div>
              </div>

              {/* Fake System Stats */}
              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-muted-foreground">LATENCY</span>
                  <span className="text-white">8.42ms</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-muted-foreground">
                    SERVICES INITIALIZED
                  </span>
                  <span className="text-white">4 / 4 READY</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-muted-foreground">UPTIME</span>
                  <span className="text-white">99.998%</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-muted-foreground">
                    TARGET DEPLOYMENTS
                  </span>
                  <span className="text-accent">PRODUCTION CORE</span>
                </div>
              </div>

              {/* Live activity bar chart placeholder */}
              <div className="space-y-2">
                <div className="flex justify-between font-mono text-[10px] text-muted-foreground">
                  <span>NETWORK LOAD</span>
                  <span>42% CAPACITY</span>
                </div>
                <div className="h-2 bg-white/5 border border-white/10 p-[1px] rounded-none">
                  <div className="h-full bg-accent w-[42%] transition-all duration-1000" />
                </div>
              </div>

              <div className="bg-white/5 p-3 border border-white/10 font-mono text-[10px] text-muted-foreground leading-relaxed">
                <span className="text-white font-bold">INFO:</span> Systems
                routing optimized. Sharp grid layouts enabled. Circular layouts
                suppressed per protocol:{" "}
                <span className="text-accent font-semibold">
                  AVOID_ROUNDED_EDGES = TRUE
                </span>
                .
              </div>
            </div>
          </div>
        </div>

        {/* Bottom category quick-scroll list */}
        <div
          data-reveal
          className="grid grid-cols-2 md:grid-cols-4 border border-white/10 bg-white/2 divide-x divide-y md:divide-y-0 divide-white/10 mt-16 font-mono text-xs uppercase tracking-wider"
        >
          <a
            href="#websites"
            className="p-5 flex items-center justify-between hover:bg-white/5 transition-colors group"
          >
            <span>01 // Websites</span>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
          </a>
          <a
            href="#applications"
            className="p-5 flex items-center justify-between hover:bg-white/5 transition-colors group"
          >
            <span>02 // Applications</span>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
          </a>
          <a
            href="#crms"
            className="p-5 flex items-center justify-between hover:bg-white/5 transition-colors group"
          >
            <span>03 // CRMs</span>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
          </a>
          <a
            href="#marketing"
            className="p-5 flex items-center justify-between hover:bg-white/5 transition-colors group"
          >
            <span>04 // Marketing</span>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
          </a>
        </div>
      </section>

      {/* DETAILED CAPABILITIES SECTIONS */}

      {/* 01. Websites */}
      <section
        id="websites"
        className="relative border-t border-white/10 scroll-mt-20 py-24 sm:py-32"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Texts */}
            <div data-reveal className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase text-accent">
                  [ 01 // CORE PRODUCT ]
                </span>
                <span className="h-px flex-grow bg-white/10" />
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal uppercase leading-none">
                Websites
              </h2>

              <h3 className="font-display text-2xl sm:text-3xl font-medium text-white/90">
                Create, sell, and scale with confidence.
              </h3>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Sell your products to customers anywhere, anytime, without
                location limits. Turn visitors into customers with a fast,
                secure, and convenient online shopping experience.
              </p>

              {/* Brutalist bullet items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="border border-white/5 bg-white/2 p-4 font-mono text-xs space-y-1">
                  <div className="text-white font-semibold">GLOBAL RANGE</div>
                  <div className="text-muted-foreground">
                    Deploy shops cross-region.
                  </div>
                </div>
                <div className="border border-white/5 bg-white/2 p-4 font-mono text-xs space-y-1">
                  <div className="text-white font-semibold">
                    CONVERSION SPEED
                  </div>
                  <div className="text-muted-foreground">
                    Sub-second page speeds.
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Website Widget (Simulated Checkout) */}
            <div data-reveal className="lg:col-span-6">
              <div className="border border-white/10 bg-card p-6 space-y-6 relative rounded-none">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-accent" />
                    <span className="font-mono text-xs uppercase text-white font-bold">
                      STOREFRONT.SIMULATOR
                    </span>
                  </div>
                  <div className="border border-white/15 px-2 py-0.5 text-[9px] font-mono uppercase bg-white/5">
                    HOST: LIVE
                  </div>
                </div>

                {/* Simulated Ecomm Card */}
                <div className="border border-white/10 p-4 bg-background space-y-4 rounded-none">
                  <div className="aspect-video w-full bg-white/5 flex items-center justify-center relative rounded-none border border-white/5">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.75_0.19_55/_12%),transparent_70%)] pointer-events-none" />
                    <span className="font-mono text-xs text-white/30 uppercase tracking-widest">
                      [ ex_commerce_package ]
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-display font-medium text-base text-white">
                        ExCommerce Premium Suite
                      </h4>
                      <p className="text-xs text-muted-foreground font-mono mt-0.5">
                        Automated web sales license
                      </p>
                    </div>
                    <span className="font-mono text-sm text-accent font-bold">
                      $12,999.00
                    </span>
                  </div>

                  <div className="border-t border-white/5 pt-4 space-y-3">
                    {cartStatus === "idle" && (
                      <button
                        onClick={() => setCartStatus("processing")}
                        className="w-full bg-accent text-background font-mono text-xs uppercase py-3 font-semibold hover:bg-transparent hover:text-accent border border-accent transition-colors duration-300 rounded-none cursor-pointer"
                      >
                        [ INITIATE SECURE PURCHASE ]
                      </button>
                    )}

                    {cartStatus === "processing" && (
                      <div className="space-y-2">
                        <div className="flex justify-between font-mono text-[10px] text-muted-foreground">
                          <span>SECURING GATEWAY...</span>
                          <span>{progress}%</span>
                        </div>
                        <div className="h-2 bg-white/5 border border-white/15 p-[1px] rounded-none">
                          <div
                            className="h-full bg-accent transition-all duration-150"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {cartStatus === "success" && (
                      <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 space-y-2 rounded-none">
                        <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold">
                          <Check className="w-4 h-4 shrink-0" />
                          <span>TRANSACTION AUTHORIZED</span>
                        </div>
                        <p className="text-[10px] text-emerald-400/80 font-mono leading-relaxed">
                          Secure token generated. Customer redirects fired.
                          E-commerce conversion registered.
                        </p>
                        <button
                          onClick={() => setCartStatus("idle")}
                          className="text-[10px] font-mono text-white/50 underline hover:text-white mt-1 cursor-pointer block"
                        >
                          Reset Demo
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Applications */}
      <section
        id="applications"
        className="relative border-t border-white/10 scroll-mt-20 py-24 sm:py-32"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Interactive Applications Widget (Console Logs) */}
            <div data-reveal className="lg:col-span-6 lg:order-2">
              <div className="border border-white/10 bg-card p-6 space-y-6 relative rounded-none">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-accent" />
                    <span className="font-mono text-xs uppercase text-white font-bold">
                      APP.PROCESS_MONITOR
                    </span>
                  </div>
                  <button
                    onClick={handleDispatch}
                    className="border border-accent/30 text-accent hover:border-accent hover:bg-accent/5 px-3 py-1 text-[10px] font-mono uppercase bg-transparent transition-colors cursor-pointer rounded-none"
                  >
                    [ RUN PROCESS ]
                  </button>
                </div>

                {/* Simulated Terminal logs */}
                <div className="bg-background border border-white/10 p-4 font-mono text-[11px] space-y-2 min-h-[180px] flex flex-col justify-end rounded-none">
                  {logs.map((log, idx) => (
                    <div key={idx} className="flex gap-2 leading-relaxed">
                      <span className="text-white/40">[{log.time}]</span>
                      <span
                        className={
                          log.type === "SUCCESS"
                            ? "text-emerald-400"
                            : "text-muted-foreground"
                        }
                      >
                        {log.type}:
                      </span>
                      <span className="text-white/95">{log.message}</span>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-white/5 flex justify-between text-[10px] text-muted-foreground mt-2">
                    <span>TASKS_RUN: {apiCount}</span>
                    <span>LOAD: STABLE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Texts */}
            <div data-reveal className="lg:col-span-6 lg:order-1 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase text-accent">
                  [ 02 // AGENT WORKFLOWS ]
                </span>
                <span className="h-px flex-grow bg-white/10" />
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal uppercase leading-none">
                Applications
              </h2>

              <h3 className="font-display text-2xl sm:text-3xl font-medium text-white/90">
                Create. Connect. Grow. <br />
                Simplify Every Interaction.
              </h3>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Build stronger customer connections with intelligent
                applications designed for modern businesses. We develop
                cloud-native, real-time products crafted to operate smoothly at
                scale.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="border border-white/5 bg-white/2 p-4 font-mono text-xs space-y-1">
                  <div className="text-white font-semibold">SECURE SOCKETS</div>
                  <div className="text-muted-foreground">
                    Instantly synchronized connections.
                  </div>
                </div>
                <div className="border border-white/5 bg-white/2 p-4 font-mono text-xs space-y-1">
                  <div className="text-white font-semibold">ROBUST CORE</div>
                  <div className="text-muted-foreground">
                    Built to execute 24/7 without fail.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. CRMs */}
      <section
        id="crms"
        className="relative border-t border-white/10 scroll-mt-20 py-24 sm:py-32"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Texts */}
            <div data-reveal className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase text-accent">
                  [ 03 // DATA PIPELINE ]
                </span>
                <span className="h-px flex-grow bg-white/10" />
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal uppercase leading-none">
                CRMs
              </h2>

              <h3 className="font-display text-2xl sm:text-3xl font-medium text-white/90">
                Keep customers close, success closer.
              </h3>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Build stronger relationships and close more deals with the power
                of CRM. Synchronize lead acquisition pipelines, automate
                follow-ups, and structure customer profiles into a robust
                central directory.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="border border-white/5 bg-white/2 p-4 font-mono text-xs space-y-1">
                  <div className="text-white font-semibold">SYNC ENGINE</div>
                  <div className="text-muted-foreground">
                    Bi-directional automated hooks.
                  </div>
                </div>
                <div className="border border-white/5 bg-white/2 p-4 font-mono text-xs space-y-1">
                  <div className="text-white font-semibold">
                    LEAD ATTRIBUTION
                  </div>
                  <div className="text-muted-foreground">
                    Track absolute ROI of source.
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive CRM Widget (Kanban Sync Board) */}
            <div data-reveal className="lg:col-span-6">
              <div className="border border-white/10 bg-card p-6 space-y-6 relative rounded-none">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-accent" />
                    <span className="font-mono text-xs uppercase text-white font-bold">
                      PIPELINE.CONTROLLER
                    </span>
                  </div>
                  <div className="text-accent font-mono text-xs font-semibold">
                    WON_REVENUE: ${totalWonRevenue.toLocaleString()}
                  </div>
                </div>

                {/* Simulated Kanban Columns */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Column 1: Pipeline */}
                  <div className="border border-white/10 bg-background p-3 space-y-3 rounded-none">
                    <div className="border-b border-white/10 pb-2 flex justify-between items-center">
                      <span className="font-mono text-[10px] text-muted-foreground uppercase">
                        LEADS_FLOW
                      </span>
                      <span className="text-[9px] bg-white/5 border border-white/15 px-1 font-mono text-white/60">
                        {crmDeads.filter((d) => d.stage === "pipeline").length}
                      </span>
                    </div>
                    {crmDeads
                      .filter((d) => d.stage === "pipeline")
                      .map((deal) => (
                        <div
                          key={deal.id}
                          onClick={() => moveDeal(deal.id)}
                          className="border border-white/10 bg-white/2 p-3 text-xs space-y-2 hover:border-accent cursor-pointer group transition-colors rounded-none"
                        >
                          <div className="font-medium text-white flex justify-between items-start">
                            <span>{deal.client}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-accent transition-colors" />
                          </div>
                          <div className="flex justify-between items-center text-[10px] font-mono text-muted-foreground">
                            <span>VALUE: ${deal.value}</span>
                            <span className="text-accent font-semibold group-hover:underline">
                              [WIN]
                            </span>
                          </div>
                        </div>
                      ))}
                    {crmDeads.filter((d) => d.stage === "pipeline").length ===
                      0 && (
                      <div className="text-center font-mono text-[10px] text-muted-foreground py-8">
                        No active leads
                      </div>
                    )}
                  </div>

                  {/* Column 2: Won */}
                  <div className="border border-white/10 bg-background p-3 space-y-3 rounded-none">
                    <div className="border-b border-white/10 pb-2 flex justify-between items-center">
                      <span className="font-mono text-[10px] text-muted-foreground uppercase">
                        CLOSED_WON
                      </span>
                      <span className="text-[9px] bg-emerald-500/10 border border-emerald-500/20 px-1 font-mono text-emerald-400">
                        {crmDeads.filter((d) => d.stage === "won").length}
                      </span>
                    </div>
                    {crmDeads
                      .filter((d) => d.stage === "won")
                      .map((deal) => (
                        <div
                          key={deal.id}
                          onClick={() => moveDeal(deal.id)}
                          className="border border-emerald-500/20 bg-emerald-500/5 p-3 text-xs space-y-2 hover:border-white transition-colors cursor-pointer rounded-none"
                        >
                          <div className="font-medium text-white flex justify-between items-center">
                            <span>{deal.client}</span>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          </div>
                          <div className="flex justify-between items-center text-[10px] font-mono text-emerald-400/80">
                            <span>VALUE: ${deal.value}</span>
                            <span className="text-white/50 underline">
                              [RESET]
                            </span>
                          </div>
                        </div>
                      ))}
                    {crmDeads.filter((d) => d.stage === "won").length === 0 && (
                      <div className="text-center font-mono text-[10px] text-muted-foreground py-8">
                        Move a card here
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-[10px] text-muted-foreground font-mono leading-relaxed bg-white/5 p-2.5 border border-white/10">
                  <span className="text-accent font-bold">ENGAGEMENT TIP:</span>{" "}
                  Click on a lead card to update its pipeline status instantly.
                  Watch total won revenue scale up.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Marketing Software */}
      <section
        id="marketing"
        className="relative border-t border-white/10 scroll-mt-20 py-24 sm:py-32"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Interactive Marketing Widget (Graph Tracker) */}
            <div data-reveal className="lg:col-span-6 lg:order-2">
              <div className="border border-white/10 bg-card p-6 space-y-6 relative rounded-none">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <BarChart className="w-4 h-4 text-accent" />
                    <span className="font-mono text-xs uppercase text-white font-bold">
                      METRICS.DISPATCHER
                    </span>
                  </div>

                  {/* Selector tabs */}
                  <div className="flex border border-white/15 bg-background p-0.5 rounded-none font-mono text-[9px]">
                    <button
                      onClick={() => setMarketingMetric("traffic")}
                      className={`px-2 py-1 cursor-pointer rounded-none transition-colors uppercase ${marketingMetric === "traffic" ? "bg-white text-background font-bold" : "text-muted-foreground hover:text-white"}`}
                    >
                      Traffic
                    </button>
                    <button
                      onClick={() => setMarketingMetric("conversions")}
                      className={`px-2 py-1 cursor-pointer rounded-none transition-colors uppercase ${marketingMetric === "conversions" ? "bg-white text-background font-bold" : "text-muted-foreground hover:text-white"}`}
                    >
                      Conv
                    </button>
                    <button
                      onClick={() => setMarketingMetric("roas")}
                      className={`px-2 py-1 cursor-pointer rounded-none transition-colors uppercase ${marketingMetric === "roas" ? "bg-white text-background font-bold" : "text-muted-foreground hover:text-white"}`}
                    >
                      ROAS
                    </button>
                  </div>
                </div>

                {/* Simulated Chart */}
                <div className="bg-background border border-white/10 p-6 h-[200px] flex items-end justify-between relative rounded-none">
                  {/* Grid lines inside chart */}
                  <div className="absolute inset-x-0 top-1/4 border-t border-white/5 pointer-events-none" />
                  <div className="absolute inset-x-0 top-2/4 border-t border-white/5 pointer-events-none" />
                  <div className="absolute inset-x-0 top-3/4 border-t border-white/5 pointer-events-none" />

                  {getMarketingBars().map((bar, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center w-[18%] h-full justify-end z-10 group relative"
                    >
                      {/* Floating tooltip */}
                      <span className="absolute -top-6 text-[10px] font-mono text-accent bg-background border border-white/15 px-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        {bar.value}
                      </span>
                      <div
                        className={`w-full ${bar.color} ${bar.height} transition-all duration-500 ease-out rounded-none`}
                      />
                      <span className="font-mono text-[10px] text-muted-foreground mt-2 uppercase">
                        {bar.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="text-[10px] text-muted-foreground font-mono flex items-center justify-between">
                  <span>METRIC SELECTED: {marketingMetric.toUpperCase()}</span>
                  <span className="text-accent animate-pulse font-bold">
                    STATUS: TRACKING_OK
                  </span>
                </div>
              </div>
            </div>

            {/* Texts */}
            <div data-reveal className="lg:col-span-6 lg:order-1 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase text-accent">
                  [ 04 // GROWTH SYSTEMS ]
                </span>
                <span className="h-px flex-grow bg-white/10" />
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal uppercase leading-none">
                Marketing Software
              </h2>

              <h3 className="font-display text-2xl sm:text-3xl font-medium text-white/90">
                Custom-built for success & Innovation, coded your way.
              </h3>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Scalable enterprise software tailored to your unique business
                processes, increasing efficiency and productivity. Run automated
                user-journey workflows, custom attribution scripts, and
                high-volume email funnels.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="border border-white/5 bg-white/2 p-4 font-mono text-xs space-y-1">
                  <div className="text-white font-semibold">
                    DATA VISIBILITY
                  </div>
                  <div className="text-muted-foreground">
                    Unified customer journey logs.
                  </div>
                </div>
                <div className="border border-white/5 bg-white/2 p-4 font-mono text-xs space-y-1">
                  <div className="text-white font-semibold">SCALE SYSTEM</div>
                  <div className="text-muted-foreground">
                    Orchestrate custom pipelines.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH MATRIX AND EXPLORER SECTION */}
      <section
        id="tech-explorer"
        className="relative border-t border-white/10 py-24 sm:py-32 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div data-reveal className="max-w-2xl mb-16 space-y-4">
            <span className="font-mono text-xs uppercase text-accent">
              [ SYSTEM MATRIX & STACKS ]
            </span>
            <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight">
              Unified Technology Stack
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Explore the battle-tested technologies and frameworks we deploy
              across our four core capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border border-white/10 rounded-none bg-white/2 overflow-hidden">
            {/* Category Selector Side Menu */}
            <div className="lg:col-span-4 border-r border-white/10 flex flex-col divide-y divide-white/10 font-mono text-xs uppercase tracking-wider bg-black/40">
              <button
                onClick={() => setActiveCategory("websites")}
                className={`p-6 text-left flex justify-between items-center transition-colors cursor-pointer rounded-none ${activeCategory === "websites" ? "bg-accent text-background font-bold" : "text-white/70 hover:bg-white/5"}`}
              >
                <span>01 // Websites</span>
                <Globe
                  className={`w-4 h-4 ${activeCategory === "websites" ? "text-background" : "text-muted-foreground"}`}
                />
              </button>
              <button
                onClick={() => setActiveCategory("applications")}
                className={`p-6 text-left flex justify-between items-center transition-colors cursor-pointer rounded-none ${activeCategory === "applications" ? "bg-accent text-background font-bold" : "text-white/70 hover:bg-white/5"}`}
              >
                <span>02 // Applications</span>
                <Cpu
                  className={`w-4 h-4 ${activeCategory === "applications" ? "text-background" : "text-muted-foreground"}`}
                />
              </button>
              <button
                onClick={() => setActiveCategory("crms")}
                className={`p-6 text-left flex justify-between items-center transition-colors cursor-pointer rounded-none ${activeCategory === "crms" ? "bg-accent text-background font-bold" : "text-white/70 hover:bg-white/5"}`}
              >
                <span>03 // CRMs</span>
                <Users
                  className={`w-4 h-4 ${activeCategory === "crms" ? "text-background" : "text-muted-foreground"}`}
                />
              </button>
              <button
                onClick={() => setActiveCategory("marketing")}
                className={`p-6 text-left flex justify-between items-center transition-colors cursor-pointer rounded-none ${activeCategory === "marketing" ? "bg-accent text-background font-bold" : "text-white/70 hover:bg-white/5"}`}
              >
                <span>04 // Marketing Software</span>
                <Terminal
                  className={`w-4 h-4 ${activeCategory === "marketing" ? "text-background" : "text-muted-foreground"}`}
                />
              </button>
            </div>

            {/* Tech Stack Details List */}
            <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    ACTIVE_STACK // {activeCategory.toUpperCase()}
                  </span>
                  <span className="text-[10px] font-mono text-accent">
                    [ SYSTEM LEVEL ]
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {techStacks[activeCategory].map((tech, idx) => (
                    <div
                      key={idx}
                      className="border border-white/5 bg-white/2 p-4 space-y-2 rounded-none hover:border-white/20 transition-all duration-300"
                    >
                      <div className="font-mono text-sm text-white font-semibold flex items-center gap-2">
                        <span className="text-accent font-bold">&gt;_</span>
                        {tech.name}
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {tech.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-muted-foreground">
                <span>DEPLOYED TO: MULTI-REGION K8S CLUSTERS</span>
                <span className="text-white flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-accent" />
                  SHARP ALIGNMENT APPLIED
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Contact redirect panel */}
      <section className="relative border-t border-white/10 py-24 sm:py-32 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto px-5 text-center space-y-8">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-none">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to scale your operation?</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-normal uppercase leading-tight">
            Build your platform the right way.
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
            Connect with our team to scope your application framework,
            integration pipelines, and custom dashboards.
          </p>

          <div className="flex justify-center pt-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 border border-white/15 bg-white text-background px-8 py-4 font-mono text-sm uppercase tracking-wider font-bold hover:border-accent hover:bg-accent hover:text-background transition-all duration-300 rounded-none group"
            >
              <span>Initiate Discovery</span>
              <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Extechnology;
