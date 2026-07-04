const Footer = () => {
  return (
    <div>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-4 text-xs text-muted-foreground sm:flex-row sm:px-8">
          <span>© {new Date().getFullYear()} EX Creative & Technology</span>
          <span className="tabular-nums">Made quietly, everywhere.</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
