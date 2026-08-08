import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Installation help and troubleshooting for Robux Limit Tracker.",
};

export default function Support() {
  return (
    <main className="document-main shell">
      <header className="document-hero">
        <p className="eyebrow">Support</p>
        <h1>Get back to a clear view.</h1>
        <p>
          Most issues can be solved with a page reload or by confirming that
          Roblox is open to the correct settings section in the same browser.
        </p>
      </header>

      <div className="support-grid">
        <section className="support-card">
          <h2>Getting started</h2>
          <ol>
            <li>Install and enable Robux Limit Tracker.</li>
            <li>Sign in to Roblox in the same browser.</li>
            <li>Open Settings, then select the Robux section.</li>
            <li>Reload the page once to begin a fresh check.</li>
          </ol>
        </section>

        <section className="support-card">
          <h2>The tracker does not appear</h2>
          <ul>
            <li>Confirm the extension is enabled for Roblox.</li>
            <li>Confirm you are on Roblox&apos;s transfer-limit settings page.</li>
            <li>Reload after Roblox has finished signing you in.</li>
            <li>Temporarily disable page-customizing extensions to identify a layout conflict.</li>
          </ul>
        </section>

        <section className="support-card">
          <h2>Roblox rate limited the check</h2>
          <p>
            The extension checks once per page load and respects Roblox&apos;s
            retry instructions. Wait for the displayed retry time before
            reloading. Repeated reloads can extend the rate limit.
          </p>
        </section>

        <section className="support-card">
          <h2>The estimate looks different</h2>
          <p>
            The extension reconstructs an estimate from outgoing transaction
            history. Roblox&apos;s server-side decision is always authoritative,
            and Roblox may change its limits or internal website endpoints.
          </p>
        </section>

        <section className="support-card">
          <h2>Privacy and account safety</h2>
          <p>
            Robux Limit Tracker never asks for your Roblox password or security
            cookie. Do not share either one in a support request. Review the
            complete <Link href="/privacy">privacy policy</Link> for details.
          </p>
        </section>

        <section className="support-card">
          <h2>Supported browsers and layouts</h2>
          <p>
            The extension targets current Chromium-based browsers, including
            Chrome and Opera GX. It supports Roblox&apos;s standard transfer-limit
            page and the alternate layout produced by the RoGold extension.
          </p>
        </section>

        <section className="support-cta">
          <div>
            <h2>Still stuck?</h2>
            <p>Open an issue with your browser version, extension version, and a redacted screenshot.</p>
          </div>
          <a
            className="button button-primary"
            href="https://github.com/WoahItsJeebus/RTLT/issues/new"
            rel="noreferrer"
            target="_blank"
          >
            Report an issue
          </a>
        </section>
      </div>
    </main>
  );
}
