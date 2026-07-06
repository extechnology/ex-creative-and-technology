const TransformVision = () => {
  return (
    <div>
      <section
        id="branding-studio"
        className="relative border-t h-screen content-center border-white/10 scroll-mt-20 overflow-hidden"
      >
        {/* Background image — using <img> over CSS background-image for
            better performance (native lazy loading, future srcset support)
            and accessibility (alt text). object-cover + inset-0 fills the
            section regardless of viewport size. */}
        <img
          src="/hero.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Gradient overlays — bottom-to-top fade merges into site background;
            left-side vignette darkens behind the text column for legibility. */}
        <div className="absolute inset-0 bg-linear-to-r from-background/95 via-background/60 to-background/10 pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-background/30 pointer-events-none" />

        {/* Content — sits above both image and overlays */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div data-reveal className="lg:col-span-6 space-y-4">

              <h3 className="font-display text-2xl sm:text-4xl lg:text-6xl font-medium text-white/95">
                Transform Your Vision Into a Powerful Brand.
              </h3>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Make your business stand out through strategic branding and
                creative excellence today. Distinctive branding helps businesses
                connect, engage, and grow with greater confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransformVision;
