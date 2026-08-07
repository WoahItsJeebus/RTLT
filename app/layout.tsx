import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const forwardedHost = requestHeaders.get("x-forwarded-host")?.split(",")[0].trim();
  const candidateHost = forwardedHost || requestHeaders.get("host") || "localhost:3000";
  const host = /^[a-z0-9.-]+(?::\d+)?$/i.test(candidateHost)
    ? candidateHost
    : "localhost:3000";
  const forwardedProtocol = requestHeaders.get("x-forwarded-proto")?.split(",")[0].trim();
  const protocol = forwardedProtocol === "http" || forwardedProtocol === "https"
    ? forwardedProtocol
    : host.startsWith("localhost")
      ? "http"
      : "https";
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: {
      default: "Robux Limit Tracker",
      template: "%s | Robux Limit Tracker",
    },
    description:
      "A private-by-design browser extension for understanding outgoing Robux transfer limits.",
    applicationName: "Robux Limit Tracker",
    icons: {
      icon: "/icon.png",
      shortcut: "/icon.png",
      apple: "/icon.png",
    },
    openGraph: {
      type: "website",
      siteName: "Robux Limit Tracker",
      title: "Robux Limit Tracker",
      description: "Know what counts. Know when it clears.",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1200,
          height: 630,
          alt: "Robux Limit Tracker — Know what counts. Know when it clears.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Robux Limit Tracker",
      description: "Know what counts. Know when it clears.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="header-inner shell">
            <a className="brand" href="/" aria-label="Robux Limit Tracker home">
              <img src="/icon.png" alt="" width="40" height="40" />
              <span>
                <strong>Robux Limit Tracker</strong>
                <small>Unofficial browser extension</small>
              </span>
            </a>
            <nav aria-label="Main navigation">
              <a href="/privacy">Privacy</a>
              <a href="/support">Support</a>
              <a href="https://github.com/WoahItsJeebus/RTLT" rel="noreferrer" target="_blank">
                Source
              </a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="footer-inner shell">
            <div>
              <strong>Robux Limit Tracker</strong>
              <p>A focused, local view of outgoing transfer limits.</p>
            </div>
            <nav aria-label="Footer navigation">
              <a href="/privacy">Privacy policy</a>
              <a href="/support">Support</a>
              <a href="https://github.com/WoahItsJeebus/RTLT/issues" rel="noreferrer" target="_blank">
                Report an issue
              </a>
            </nav>
          </div>
          <p className="footer-note shell">
            © 2026 Robux Limit Tracker. Unofficial and not affiliated with Roblox Corporation.
          </p>
        </footer>
      </body>
    </html>
  );
}
