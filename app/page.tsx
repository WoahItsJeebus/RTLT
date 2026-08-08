import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Know what counts. Know when it clears.",
  description:
    "Robux Limit Tracker adds clear daily and monthly transfer estimates to Roblox settings, with outgoing transfer details and live release countdowns.",
};

const features = [
  {
    number: "01",
    title: "Limits at a glance",
    copy: "See daily and monthly usage as exact totals with progress bars, directly where Roblox shows your transfer limits.",
  },
  {
    number: "02",
    title: "Every active transfer",
    copy: "Review the outgoing transfers that still count, including the recipient, amount, transaction time, and release countdown.",
  },
  {
    number: "03",
    title: "Built to stay light",
    copy: "The extension checks once when the page loads, then updates countdowns locally without repeatedly polling Roblox.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">A clearer view of outgoing Robux</p>
          <h1>
            Know what counts.
            <span>Know when it clears.</span>
          </h1>
          <p className="hero-lede">
            Robux Limit Tracker turns Roblox&apos;s static transfer-limit view
            into a useful timeline—without sending your transaction data to us.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/privacy">
              Read the privacy policy
            </Link>
            <Link className="button button-secondary" href="/support">
              Get support
            </Link>
          </div>
          <div className="trust-line" aria-label="Privacy highlights">
            <span>Processed in your browser</span>
            <span>No analytics</span>
            <span>No developer server</span>
          </div>
        </div>

        <div className="tracker-preview" aria-label="Example transfer limit display">
          <div className="preview-topline">
            <span>Transfer limits</span>
            <span className="preview-status">Example</span>
          </div>
          <div className="limit-row">
            <div className="limit-label">
              <span>Daily limit</span>
              <strong>3,250 / 5,000</strong>
            </div>
            <div className="progress-track" aria-hidden="true">
              <span className="progress-fill progress-daily" />
            </div>
          </div>
          <div className="limit-row">
            <div className="limit-label">
              <span>Monthly limit</span>
              <strong>7,800 / 10,000</strong>
            </div>
            <div className="progress-track" aria-hidden="true">
              <span className="progress-fill progress-monthly" />
            </div>
          </div>
          <div className="transfer-heading">
            <span>Outgoing transfers</span>
            <span>2 active</span>
          </div>
          <div className="transfer-row">
            <div>
              <strong>250 Robux</strong>
              <span>Sent to ExamplePlayer</span>
            </div>
            <div className="transfer-time">
              <span>Aug 6, 2026, 8:42 PM</span>
              <strong>Frees in 23h 18m</strong>
            </div>
          </div>
          <div className="transfer-row">
            <div>
              <strong>100 Robux</strong>
              <span>Sent to SampleUser</span>
            </div>
            <div className="transfer-time">
              <span>Jul 10, 2026, 7:21 PM</span>
              <strong>Frees in 3d 2h</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-section shell" aria-labelledby="features-heading">
        <div className="section-heading">
          <p className="eyebrow">What it adds</p>
          <h2 id="features-heading">The useful part of the history, surfaced.</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <span className="feature-number">{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="privacy-callout shell" aria-labelledby="privacy-heading">
        <div>
          <p className="eyebrow">Private by design</p>
          <h2 id="privacy-heading">Your history stays between your browser and Roblox.</h2>
        </div>
        <div className="privacy-copy">
          <p>
            The extension uses your existing Roblox session to request the
            information needed for its on-page estimate. It does not read your
            password or security cookie, save transaction history, run
            analytics, or send information to the developer.
          </p>
          <Link className="text-link" href="/privacy">
            See exactly what is accessed <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="disclaimer shell">
        <p>
          Robux Limit Tracker is an unofficial community extension and is not
          affiliated with, endorsed by, or sponsored by Roblox Corporation.
          Roblox and Robux are trademarks of Roblox Corporation.
        </p>
      </section>
    </main>
  );
}
