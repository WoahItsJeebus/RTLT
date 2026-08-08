import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for the Robux Limit Tracker browser extension, including the Roblox data it accesses and how that data is handled.",
};

const sections = [
  ["overview", "Overview"],
  ["data", "Data handled"],
  ["use", "How data is used"],
  ["storage", "Storage and retention"],
  ["sharing", "Sharing"],
  ["control", "Your control"],
  ["security", "Security"],
  ["children", "Children's privacy"],
  ["changes", "Policy changes"],
  ["contact", "Contact"],
] as const;

export default function PrivacyPolicy() {
  return (
    <main className="document-main shell">
      <header className="document-hero">
        <p className="eyebrow">Privacy policy</p>
        <h1>Clear about every request.</h1>
        <p>
          This policy explains what Robux Limit Tracker accesses, why it needs
          that information, and the boundaries built around it.
        </p>
        <div className="policy-meta">
          <span>Effective August 7, 2026</span>
          <span>Last updated August 7, 2026</span>
          <span>Version 1.0</span>
        </div>
      </header>

      <div className="document-grid">
        <nav className="document-nav" aria-label="Privacy policy sections">
          <strong>On this page</strong>
          {sections.map(([id, label]) => (
            <a href={`#${id}`} key={id}>{label}</a>
          ))}
        </nav>

        <article className="document-content">
          <p className="notice">
            Short version: the extension processes transfer information inside
            your browser to produce the on-page display. It does not send that
            information to the developer, sell it, use it for advertising, or
            retain it after the page session ends.
          </p>

          <section id="overview">
            <h2>1. Overview</h2>
            <p>
              Robux Limit Tracker is a browser extension that adds estimated
              daily and monthly outgoing Robux transfer usage to the Roblox
              settings page. It is an unofficial community project and is not
              affiliated with, endorsed by, or sponsored by Roblox Corporation.
            </p>
            <p>
              In this policy, “the extension” means Robux Limit Tracker and
              “developer” means the project maintainer. “Roblox” refers to
              Roblox Corporation and its websites and services.
            </p>
          </section>

          <section id="data">
            <h2>2. Data the extension handles</h2>
            <p>
              When you open Roblox&apos;s Robux transfer-limit settings page while
              signed in, the extension may process the following information:
            </p>
            <ul>
              <li>Your Roblox numeric account ID.</li>
              <li>
                Outgoing CurrencyTransfer records, including transfer amounts,
                creation times, transaction identifiers, and sender or receiver
                account identifiers.
              </li>
              <li>
                Public recipient profile information needed for the display,
                including numeric user ID, display name, and username.
              </li>
              <li>
                The daily and monthly transfer-limit values displayed by Roblox
                on the settings page.
              </li>
            </ul>
            <p>
              The extension uses the browser session that Roblox already
              manages. It does not read, copy, expose, or store your Roblox
              password or the contents of the <code>.ROBLOSECURITY</code> cookie.
            </p>
          </section>

          <section id="use">
            <h2>3. How the data is used</h2>
            <p>The information above is used only to provide the extension&apos;s stated purpose:</p>
            <ul>
              <li>Calculate estimated rolling daily and monthly transfer usage.</li>
              <li>Display progress bars against the limits shown by Roblox.</li>
              <li>Identify outgoing transfers that still contribute to a limit.</li>
              <li>Display recipient profile links, transaction times, and release countdowns.</li>
              <li>Prevent unnecessary requests by stopping once the needed audit window is covered.</li>
            </ul>
            <p>
              The extension does not use this information to create profiles,
              serve advertisements, determine eligibility or creditworthiness,
              train models, or provide unrelated features.
            </p>
          </section>

          <section id="storage">
            <h2>4. Storage and retention</h2>
            <p>
              Transaction and account information is held temporarily in the
              browser page&apos;s memory while the extension calculates and displays
              the estimate. The extension does not save that information to
              browser storage, a local database, or a developer-controlled server.
            </p>
            <p>
              The temporary information is discarded when the page session is
              closed, navigated away from, or reloaded. Because the developer
              does not receive or retain this information, there is no
              developer-held transaction record to delete.
            </p>
          </section>

          <section id="sharing">
            <h2>5. Data sharing and external services</h2>
            <p>
              The extension does not sell, rent, or share personal information
              with the developer, advertisers, data brokers, analytics providers,
              or other unrelated third parties.
            </p>
            <p>It communicates directly with these Roblox-operated HTTPS services:</p>
            <ul>
              <li>
                <code>users.roblox.com</code>, to identify the Roblox account
                already signed into the browser and resolve public recipient names.
              </li>
              <li>
                <code>apis.roblox.com</code>, to retrieve the signed-in
                account&apos;s relevant CurrencyTransfer history.
              </li>
            </ul>
            <p>
              Information sent to or received from Roblox remains subject to
              Roblox&apos;s own terms and privacy policy. The extension has no control
              over Roblox&apos;s processing of information on its services.
            </p>
          </section>

          <section id="control">
            <h2>6. Your control and choices</h2>
            <ul>
              <li>
                The extension runs its transfer check only when the applicable
                Roblox settings page is opened or reloaded.
              </li>
              <li>
                You can stop all extension processing at any time by disabling
                or uninstalling the extension through your browser.
              </li>
              <li>
                You can avoid starting a check by not opening the applicable
                settings page while the extension is enabled.
              </li>
            </ul>
          </section>

          <section id="security">
            <h2>7. Security</h2>
            <p>
              All extension requests use HTTPS and are sent only to Roblox-owned
              domains required for the feature. The extension contains its code
              locally, does not load remotely hosted JavaScript, and includes no
              analytics or advertising SDK.
            </p>
            <p>
              No software can guarantee absolute security. If you believe you
              have found a security issue, please report it privately through
              the project support channel before publishing technical details.
            </p>
          </section>

          <section id="children">
            <h2>8. Children&apos;s privacy</h2>
            <p>
              The extension is a utility for an existing Roblox browser session.
              The developer does not knowingly collect personal information from
              children or any other users. No account registration with the
              developer is offered or required.
            </p>
          </section>

          <section id="changes">
            <h2>9. Changes to this policy</h2>
            <p>
              This policy may be updated if the extension&apos;s functionality or
              data practices change. Material changes will be reflected by the
              “Last updated” date above and disclosed through the extension or
              its store listing when required.
            </p>
          </section>

          <section id="contact">
            <h2>10. Contact</h2>
            <p>
              Privacy questions, support requests, and security reports can be
              submitted through the project&apos;s public support channel:
            </p>
            <p>
              <a href="https://github.com/WoahItsJeebus/RTLT/issues" rel="noreferrer" target="_blank">
                github.com/WoahItsJeebus/RTLT/issues
              </a>
            </p>
            <p>
              Do not include Roblox passwords, authentication cookies, or full
              unredacted transaction histories in a public issue.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}

