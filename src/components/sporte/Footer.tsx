export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground font-bold">
                S
              </div>
              <span className="text-lg font-bold">SportE</span>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70">
              A modern platform for organizing sporting events across multiple
              sports.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/90">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#home" className="hover:text-primary-foreground">Home</a></li>
              <li><a href="#apps" className="hover:text-primary-foreground">Apps</a></li>
              <li><a href="#about" className="hover:text-primary-foreground">About</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/90">
              Applications
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a
                  href="https://app.golf.gosporte.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground"
                >
                  Golf
                </a>
              </li>
              <li>Basketball (Coming Soon)</li>
              <li>Dodgeball (Coming Soon)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/90">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="mailto:hello@gosporte.com" className="hover:text-primary-foreground">
                  hello@gosporte.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/60">
          © 2026 SportE. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
