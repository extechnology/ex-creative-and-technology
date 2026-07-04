import { useState, useEffect } from "react";
import { ArrowUpRight, MessageSquare,  Check, Users, Sparkles, Smartphone, RefreshCw } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

interface ChatMessage {
  sender: "user" | "bot";
  text: string;
  time: string;
}

const Exbot = () => {
  const revealRef = useReveal<HTMLDivElement>();

  // State for Interactive WhatsApp Chat Console
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { sender: "user", text: "Hey! What features does ExBot have?", time: "17:28" },
    { sender: "bot", text: "Hello! ExBot offers instant WhatsApp automation, CRM integration, broadcasting, and shared inboxes. Select a preset query below to test me!", time: "17:28" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const triggerBotReply = (query: string, replyText: string) => {
    if (isTyping) return;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setChatMessages(prev => [...prev, { sender: "user", text: query, time }]);
    setIsTyping(true);

    setTimeout(() => {
      setChatMessages(prev => [...prev, { sender: "bot", text: replyText, time }]);
      setIsTyping(false);
    }, 1000);
  };

  // State for Broadcast campaign simulator
  const [broadcastStatus, setBroadcastStatus] = useState<"idle" | "running" | "completed">("idle");
  const [broadcastCount, setBroadcastCount] = useState(0);

  useEffect(() => {
    let interval: any;
    if (broadcastStatus === "running") {
      setBroadcastCount(0);
      interval = setInterval(() => {
        setBroadcastCount((prev) => {
          if (prev >= 4500) {
            clearInterval(interval);
            setBroadcastStatus("completed");
            return 4500;
          }
          return prev + 500;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [broadcastStatus]);

  // State for Multi-channel Inbox selector
  const [activeChannel, setActiveChannel] = useState<"whatsapp" | "instagram" | "messenger">("whatsapp");

  const getChannelMessages = () => {
    switch (activeChannel) {
      case "whatsapp":
        return [
          { sender: "Client A", snippet: "Need to confirm delivery time...", time: "1m ago", unread: true },
          { sender: "Client B", snippet: "Order confirmed! Thanks", time: "14m ago", unread: false },
        ];
      case "instagram":
        return [
          { sender: "influencer_x", snippet: "Collab proposal details enclosed", time: "3m ago", unread: true },
          { sender: "user_902", snippet: "Do you ship to Mumbai?", time: "2h ago", unread: false },
        ];
      case "messenger":
        return [
          { sender: "John Doe", snippet: "Is the discount coupon still active?", time: "30s ago", unread: true },
          { sender: "Jane Smith", snippet: "Support issue resolved, thanks team!", time: "5h ago", unread: false },
        ];
    }
  };

  // State for order confirmation mock
  const [orderState, setOrderState] = useState<"pending" | "processing" | "confirmed">("pending");

  const handleOrderConfirm = () => {
    setOrderState("processing");
    setTimeout(() => {
      setOrderState("confirmed");
    }, 1500);
  };

  return (
    <div ref={revealRef} className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden">
      {/* Brutalist Grid Pattern Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(1_0_0/_3%)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/_3%)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />
      
      {/* Structural guidelines */}
      <div className="absolute left-[10%] top-0 bottom-0 w-px bg-white/5 pointer-events-none hidden lg:block z-0" />
      <div className="absolute right-[10%] top-0 bottom-0 w-px bg-white/5 pointer-events-none hidden lg:block z-0" />

      {/* Hero Section */}
      <section id="top" className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-5 sm:px-8 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-auto mb-auto pt-6">
          
          {/* Headline and Lead */}
          <div data-reveal className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* <div className="flex flex-wrap gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <span className="border border-white/10 px-2 py-0.5 bg-white/5">[ BOT_ENGINE: ENGAGED ]</span>
              <span className="border border-white/10 px-2 py-0.5 bg-white/5">[ DISPATCH: SECURE ]</span>
            </div> */}

            <div className="space-y-5">
              <h1 className="text-balance font-display text-4xl sm:text-6xl lg:text-7xl font-normal leading-[0.95] tracking-tight uppercase">
                exbot
              </h1>
              <h1 className=" font-display text-xl sm:text-xl lg:text-2xl font-normal leading-[0.95] tracking-tight uppercase">
                Automate Every Interaction & <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-accent via-white to-white/30">
                  Seamless Customer Communication
                </span>
              </h1>
            </div>

            <p className="max-w-xl text-xs sm:text-lg leading-6 text-muted-foreground">
              Streamline every customer interaction with smart WhatsApp automation that saves time and drives business growth. Never miss a customer opportunity.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#chat-console"
                className="group border border-accent bg-accent text-background px-6 py-3.5 text-sm font-mono uppercase tracking-wider font-semibold transition-colors duration-300 hover:bg-transparent hover:text-accent rounded-none"
              >
                Test Live Bot
              </a>
              <a
                href="#features-matrix"
                className="group border border-white/15 bg-white/5 text-white px-6 py-3.5 text-sm font-mono uppercase tracking-wider font-semibold transition-all duration-300 hover:border-white hover:bg-white hover:text-background rounded-none"
              >
                View Features
              </a>
            </div>
          </div>

          {/* Interactive Chat Console Widget (WhatsApp Simulator) */}
          <div id="chat-console" data-reveal className="lg:col-span-5 flex items-center">
            <div className="w-full border border-white/10 bg-card/75 backdrop-blur-md p-5 space-y-4 rounded-none relative">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-2 h-px bg-accent" />
              <div className="absolute top-0 left-0 w-px h-2 bg-accent" />
              <div className="absolute bottom-0 right-0 w-2 h-px bg-accent" />
              <div className="absolute bottom-0 right-0 w-px h-2 bg-accent" />

              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-none animate-pulse" />
                  <span className="font-mono text-xs uppercase text-white font-bold">WHATSAPP.SIMULATOR</span>
                </div>
                <span className="font-mono text-[9px] text-muted-foreground">STATUS: IDLE</span>
              </div>

              {/* Chat Logs */}
              <div className="bg-background border border-white/5 p-4 h-[240px] overflow-y-auto flex flex-col gap-3 rounded-none">
                {chatMessages.map((msg, idx) => (
                  <div 
                    key={idx} 
                    className={`max-w-[85%] p-3 text-xs font-sans rounded-none leading-relaxed relative ${
                      msg.sender === "bot" 
                        ? "bg-white/5 text-white border border-white/10 self-start" 
                        : "bg-accent text-background border border-accent self-end"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className={`absolute bottom-0.5 right-1.5 text-[8px] font-mono ${msg.sender === "bot" ? "text-white/40" : "text-background/60"}`}>
                      {msg.time}
                    </span>
                  </div>
                ))}
                {isTyping && (
                  <div className="bg-white/5 border border-white/10 text-white/50 text-[10px] font-mono px-3 py-1.5 self-start rounded-none">
                    ExBot is typing...
                  </div>
                )}
              </div>

              {/* User preset options */}
              <div className="grid grid-cols-1 gap-2 font-mono text-[10px]">
                <button 
                  onClick={() => triggerBotReply("What is the response speed?", "Instant. Responses are triggered within milliseconds, delivering support round-the-clock.")}
                  className="border border-white/10 hover:border-white text-left p-2 transition-colors cursor-pointer text-white/80 rounded-none bg-white/2"
                >
                  &gt; [ Ask about response speed ]
                </button>
                <button 
                  onClick={() => triggerBotReply("How do order confirmations work?", "Reduce manual work by automatically sending order updates through WhatsApp API.")}
                  className="border border-white/10 hover:border-white text-left p-2 transition-colors cursor-pointer text-white/80 rounded-none bg-white/2"
                >
                  &gt; [ Ask about order confirmation ]
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div data-reveal className="grid grid-cols-2 md:grid-cols-4 border border-white/10 bg-white/2 divide-x divide-y md:divide-y-0 divide-white/10 mt-16 font-mono text-xs uppercase tracking-wider">
          <a href="#support-anytime" className="p-5 flex items-center justify-between hover:bg-white/5 transition-colors group">
            <span>01 // Support Engine</span>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
          </a>
          <a href="#broadcasts" className="p-5 flex items-center justify-between hover:bg-white/5 transition-colors group">
            <span>02 // Broadcasts</span>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
          </a>
          <a href="#order-confirmation" className="p-5 flex items-center justify-between hover:bg-white/5 transition-colors group">
            <span>03 // Click Checkout</span>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
          </a>
          <a href="#shared-inbox" className="p-5 flex items-center justify-between hover:bg-white/5 transition-colors group">
            <span>04 // Unified Inbox</span>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
          </a>
        </div>
      </section>

      {/* AUTOMATION DETAILS MATRIX */}

      {/* 01. Support Anytime */}
      <section id="support-anytime" className="relative border-t border-white/10 scroll-mt-20 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div data-reveal className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase text-accent">[ 01 // 24/7 SUPPORT ]</span>
                <span className="h-px flex-grow bg-white/10" />
              </div>
              
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal uppercase leading-none">
                Auto Response
              </h2>

              <h3 className="font-display text-2xl sm:text-3xl font-medium text-white/95">
                Your Business Never Sleeps & Respond Instantly, Every Time.
              </h3>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Deliver round-the-clock customer support with intelligent WhatsApp automation and AI chatbots. Never miss a lead with instant, automated responses that engage customers anytime.
              </p>

              <div className="border border-white/5 bg-white/2 p-4 font-mono text-xs space-y-2">
                <div className="flex items-center gap-2 text-white">
                  <Check className="w-4 h-4 text-accent" />
                  <span>Confirm every Leads with Smart integration</span>
                </div>
                <div className="text-muted-foreground leading-relaxed pl-6">
                  Convert every conversation into a business opportunity with intelligent WhatsApp automation.
                </div>
              </div>
            </div>

            {/* Interactive Lead Integration Preview Widget */}
            <div data-reveal className="lg:col-span-6">
              <div className="border border-white/10 bg-card p-6 space-y-6 relative rounded-none">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-accent" />
                    <span className="font-mono text-xs uppercase text-white font-bold">INTEGRATION.FLOW</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">SYNC_READY</span>
                </div>

                <div className="bg-background border border-white/10 p-5 space-y-4 rounded-none">
                  {/* Step visual */}
                  <div className="grid grid-cols-5 items-center gap-2 text-center font-mono text-[10px]">
                    <div className="border border-white/15 bg-white/5 p-2 rounded-none text-white font-bold">
                      INBOUND CHAT
                    </div>
                    <div className="text-accent font-bold">➔</div>
                    <div className="border border-accent bg-accent/5 p-2 rounded-none text-accent font-bold">
                      EXBOT AUTO
                    </div>
                    <div className="text-accent font-bold">➔</div>
                    <div className="border border-white/15 bg-white/5 p-2 rounded-none text-white font-bold">
                      CRM RECORD
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground font-mono leading-relaxed bg-white/2 p-3 border border-white/5">
                    <span className="text-white">STATUS UPDATE:</span> Chat triggered on phone +91 98822001 // Auto responding active... CRM lead mapped in 0.4 seconds.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 02. Broadcasts Section */}
      <section id="broadcasts" className="relative border-t border-white/10 scroll-mt-20 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Interactive Broadcast Progress Widget */}
            <div data-reveal className="lg:col-span-6 lg:order-2">
              <div className="border border-white/10 bg-card p-6 space-y-6 relative rounded-none">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-accent" />
                    <span className="font-mono text-xs uppercase text-white font-bold">BROADCAST.SCHEDULER</span>
                  </div>
                  {broadcastStatus === "idle" && (
                    <button 
                      onClick={() => setBroadcastStatus("running")}
                      className="bg-accent text-background border border-accent hover:bg-transparent hover:text-accent font-mono text-[10px] uppercase font-bold py-1 px-3 transition-colors cursor-pointer rounded-none"
                    >
                      [ SEND CAMPAIGN ]
                    </button>
                  )}
                  {broadcastStatus !== "idle" && (
                    <button 
                      onClick={() => setBroadcastStatus("idle")}
                      className="border border-white/15 hover:border-white font-mono text-[10px] uppercase py-1 px-3 transition-colors cursor-pointer rounded-none bg-transparent"
                    >
                      [ RESET ]
                    </button>
                  )}
                </div>

                {/* Simulated Campaign panel */}
                <div className="bg-background border border-white/10 p-5 space-y-4 rounded-none">
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] text-muted-foreground uppercase">Template Context</span>
                    <div className="font-sans text-xs bg-white/2 p-3 border border-white/5 text-white/90 rounded-none">
                      "Hey, your regular updates are live. Get instant access to our portal now!"
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between font-mono text-[10px] text-muted-foreground">
                      <span>STATUS: {broadcastStatus.toUpperCase()}</span>
                      <span>{broadcastCount} / 4,500 RECIPIENTS</span>
                    </div>
                    <div className="h-2.5 bg-white/5 border border-white/15 p-[1px] rounded-none">
                      <div className="h-full bg-accent transition-all duration-100 ease-out" style={{ width: `${(broadcastCount / 4500) * 100}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Texts */}
            <div data-reveal className="lg:col-span-6 lg:order-1 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase text-accent">[ 02 // SCALE OUTREACH ]</span>
                <span className="h-px flex-grow bg-white/10" />
              </div>
              
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal uppercase leading-none">
                Broadcast
              </h2>

              <h3 className="font-display text-2xl sm:text-3xl font-medium text-white/95">
                Attend Massive Customer, In a Single Message
              </h3>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Reach thousands of customers simultaneously with automated WhatsApp broadcast. Keep customers informed with fast, reliable, and unlimited messages.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="border border-white/5 bg-white/2 p-4 font-mono text-xs">
                  <div className="text-white font-semibold">BULK CAPACITY</div>
                  <div className="text-muted-foreground mt-1">Transmit packets to up to 10k users.</div>
                </div>
                <div className="border border-white/5 bg-white/2 p-4 font-mono text-xs">
                  <div className="text-white font-semibold">RELIABILITY</div>
                  <div className="text-muted-foreground mt-1">99.8% inbox delivery standard.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 03. Order Confirmation Section */}
      <section id="order-confirmation" className="relative border-t border-white/10 scroll-mt-20 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Texts */}
            <div data-reveal className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase text-accent">[ 03 // SALE ENABLER ]</span>
                <span className="h-px flex-grow bg-white/10" />
              </div>
              
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal uppercase leading-none">
                Order Update
              </h2>

              <h3 className="font-display text-2xl sm:text-3xl font-medium text-white/95">
                Confirm Order in Single Click
              </h3>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Reduce manual work by automating order confirmations through exbot. Speed up your sales process with instant order confirmation through WhatsApp chat automation.
              </p>

              <div className="border border-white/5 bg-white/2 p-4 font-mono text-xs space-y-2">
                <div className="flex items-center gap-2 text-white">
                  <Check className="w-4 h-4 text-accent" />
                  <span>Follow-ups Confirm Big Deals</span>
                </div>
                <div className="text-muted-foreground leading-relaxed pl-6">
                  Inform opportunities to specific customers/clients without any error in your Reminder Schedule.
                </div>
              </div>
            </div>

            {/* Interactive Order Confirmation Simulator */}
            <div data-reveal className="lg:col-span-6">
              <div className="border border-white/10 bg-card p-6 space-y-6 relative rounded-none">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent" />
                    <span className="font-mono text-xs uppercase text-white font-bold">TRANSACTION.CONVERTER</span>
                  </div>
                  <span className="font-mono text-[9px] text-accent">SECURE GATEWAY</span>
                </div>

                <div className="bg-background border border-white/10 p-5 space-y-4 rounded-none">
                  <div className="flex justify-between items-center text-xs border-b border-white/5 pb-2">
                    <span className="text-white/60">PRODUCT LICENSE</span>
                    <span className="text-white font-mono font-bold">$499.00</span>
                  </div>

                  {orderState === "pending" && (
                    <button
                      onClick={handleOrderConfirm}
                      className="w-full bg-accent text-background font-mono text-xs uppercase py-3 font-semibold hover:bg-transparent hover:text-accent border border-accent transition-colors duration-300 rounded-none cursor-pointer"
                    >
                      [ ONE-CLICK ORDER CONFIRM ]
                    </button>
                  )}

                  {orderState === "processing" && (
                    <div className="text-center font-mono text-xs text-muted-foreground py-2 flex items-center justify-center gap-2">
                      <RefreshCw className="w-4 h-4 animate-spin text-accent" />
                      <span>DISPATCHING CONFIRMATION TRIGGER...</span>
                    </div>
                  )}

                  {orderState === "confirmed" && (
                    <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 space-y-2 rounded-none text-left">
                      <div className="font-mono text-xs text-emerald-400 font-bold flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        <span>ORDER DISPATCHED</span>
                      </div>
                      <p className="text-[10px] text-emerald-400/80 font-mono leading-relaxed">
                        WhatsApp notification dispatched successfully: "Thank you! Your order is validated. Tracking ID: EX_9901"
                      </p>
                      <button 
                        onClick={() => setOrderState("pending")}
                        className="text-[9px] text-white/50 underline block cursor-pointer"
                      >
                        Reset Simulator
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 04. Unified Social Inbox Section */}
      <section id="shared-inbox" className="relative border-t border-white/10 scroll-mt-20 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Interactive Inbox Simulator */}
            <div data-reveal className="lg:col-span-6 lg:order-2">
              <div className="border border-white/10 bg-card p-6 space-y-6 relative rounded-none">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-accent" />
                    <span className="font-mono text-xs uppercase text-white font-bold">SHARED.INBOX_CONTROLLER</span>
                  </div>
                  
                  {/* Channel selectors */}
                  <div className="flex border border-white/15 bg-background p-0.5 rounded-none font-mono text-[9px]">
                    <button
                      onClick={() => setActiveChannel("whatsapp")}
                      className={`px-2 py-1 cursor-pointer rounded-none transition-colors uppercase ${activeChannel === "whatsapp" ? "bg-white text-background font-bold" : "text-muted-foreground hover:text-white"}`}
                    >
                      WA
                    </button>
                    <button
                      onClick={() => setActiveChannel("instagram")}
                      className={`px-2 py-1 cursor-pointer rounded-none transition-colors uppercase ${activeChannel === "instagram" ? "bg-white text-background font-bold" : "text-muted-foreground hover:text-white"}`}
                    >
                      IG
                    </button>
                    <button
                      onClick={() => setActiveChannel("messenger")}
                      className={`px-2 py-1 cursor-pointer rounded-none transition-colors uppercase ${activeChannel === "messenger" ? "bg-white text-background font-bold" : "text-muted-foreground hover:text-white"}`}
                    >
                      FB
                    </button>
                  </div>
                </div>

                {/* Simulated conversations */}
                <div className="space-y-2 bg-background p-4 border border-white/10 rounded-none">
                  <span className="font-mono text-[9px] text-muted-foreground uppercase">{activeChannel.toUpperCase()} LIVE CHATS</span>
                  
                  {getChannelMessages().map((chat, idx) => (
                    <div key={idx} className="border border-white/5 bg-white/2 p-3 flex justify-between items-center rounded-none hover:border-white/20 transition-colors">
                      <div className="space-y-0.5">
                        <div className="font-mono text-xs text-white font-bold flex items-center gap-2">
                          {chat.sender}
                          {chat.unread && <span className="w-1.5 h-1.5 bg-accent rounded-none" />}
                        </div>
                        <p className="text-[10px] text-muted-foreground">{chat.snippet}</p>
                      </div>
                      <span className="font-mono text-[9px] text-muted-foreground">{chat.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Texts */}
            <div data-reveal className="lg:col-span-6 lg:order-1 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase text-accent">[ 04 // MULTI-CHANNEL HUB ]</span>
                <span className="h-px flex-grow bg-white/10" />
              </div>
              
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal uppercase leading-none">
                Shared Inbox
              </h2>

              <h3 className="font-display text-2xl sm:text-3xl font-medium text-white/95">
                Manage All Media Chats a Single Window.
              </h3>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Simplify communication by managing all social media chats through a single inbox. Eliminate missing customer messages with one shared inbox for every social platform.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="border border-white/5 bg-white/2 p-4 font-mono text-xs space-y-1">
                  <div className="text-white font-semibold">ZERO MISSING CONVERSATIONS</div>
                  <div className="text-muted-foreground">Central tracking dashboard routes.</div>
                </div>
                <div className="border border-white/5 bg-white/2 p-4 font-mono text-xs space-y-1">
                  <div className="text-white font-semibold">ALL-IN-ONE</div>
                  <div className="text-muted-foreground">Unified Instagram, Messenger, and WhatsApp.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURE MATRIX & CAPABILITY OVERVIEW */}
      <section id="features-matrix" className="relative border-t border-white/10 py-24 sm:py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          
          <div data-reveal className="max-w-2xl mb-16 space-y-4">
            <span className="font-mono text-xs uppercase text-accent">[ AUTOMATION FRAMEWORK ]</span>
            <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight">
              Capability Architecture
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Explore the system specifications designed to process your heavy communication pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div data-reveal className="border border-white/10 p-6 bg-white/2 space-y-4 rounded-none">
              <div className="font-mono text-xs text-accent uppercase">[ ENGINE_CAPACITY ]</div>
              <h4 className="font-display text-xl text-white font-normal uppercase">Simultaneous Broadcast</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Operate high-throughput transmissions targeting thousands of recipients without rate limits.
              </p>
            </div>

            <div data-reveal className="border border-white/10 p-6 bg-white/2 space-y-4 rounded-none">
              <div className="font-mono text-xs text-accent uppercase">[ SYNC_INTEGRATION ]</div>
              <h4 className="font-display text-xl text-white font-normal uppercase">CRM Event Synchronization</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Connect incoming lead pipelines to core databases instantly, generating instant client references.
              </p>
            </div>

            <div data-reveal className="border border-white/10 p-6 bg-white/2 space-y-4 rounded-none">
              <div className="font-mono text-xs text-accent uppercase">[ RESPONSE_LATENCY ]</div>
              <h4 className="font-display text-xl text-white font-normal uppercase">Sub-second Auto-Replies</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI chatbots route query contexts and trigger pre-configured responses within milliseconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="relative border-t border-white/10 py-24 sm:py-32 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto px-5 text-center space-y-8">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-none">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Deliver Your resources with Ai Intelligent Chats.</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-normal uppercase leading-tight">
            Transform communication with AI-powered automation.
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Transform customer communication with AI-powered automation that increases efficiency and drives better results. Set up your WhatsApp dispatcher core today.
          </p>

          <div className="flex justify-center pt-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 border border-white/15 bg-white text-background px-8 py-4 font-mono text-sm uppercase tracking-wider font-bold hover:border-accent hover:bg-accent hover:text-background transition-all duration-300 rounded-none group"
            >
              <span>Initialize ExBot</span>
              <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exbot;
