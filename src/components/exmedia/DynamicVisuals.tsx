const DynamicVisuals = () => {
  return (
    <div>
      <section
        id="branding-studio"
        className="relative border-t h-screen content-center border-white/10 scroll-mt-20 overflow-hidden"
      >
        <img
          src="/hero.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-linear-to-r from-background/95 via-background/60 to-background/10 pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-background/30 pointer-events-none" />

        {/* Content — sits above both image and overlays */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div data-reveal className="lg:col-span-6 space-y-4">
              <h3 className="font-display text-2xl sm:text-4xl lg:text-6xl font-medium text-white/95">
                Dynamic Visuals & Professional Imaging
              </h3>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Create unforgettable first impressions with premium photography.
                Bring every product detail into focus with professional
                videography and stunning digital composition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DynamicVisuals;
