import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const pages = [
  { file: "site-dist/index.html", copy: /Know what counts/ },
  { file: "site-dist/privacy/index.html", copy: /Clear about every request/ },
  { file: "site-dist/support/index.html", copy: /Get back to a clear view/ },
];

for (const page of pages) {
  test(`${page.file} is a self-contained public page`, async () => {
    const html = await readFile(new URL(`../${page.file}`, import.meta.url), "utf8");

    assert.match(html, page.copy);
    assert.match(html, /Robux Limit Tracker/);
    assert.match(html, /\/RTLT\/_next\/static\/css\//);
    assert.doesNotMatch(html, /<script\b/i);
    assert.doesNotMatch(html, /chatgpt|openai|codex|artificial intelligence/i);
    assert.doesNotMatch(html, /(?:href|src)=["']\/(?!RTLT(?:\/|["']))/i);
  });
}

test("privacy policy uses its latest Git commit date", async () => {
  const html = await readFile(
    new URL("../site-dist/privacy/index.html", import.meta.url),
    "utf8",
  );
  const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
  const commitDate = execFileSync(
    "git",
    [
      "-c",
      `safe.directory=${repositoryRoot.replaceAll("\\", "/")}`,
      "log",
      "-1",
      "--format=%cI",
      "--",
      "app/privacy/page.tsx",
    ],
    { cwd: repositoryRoot, encoding: "utf8" },
  ).trim();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(commitDate));

  assert.match(html, new RegExp(`Last updated ${formattedDate}`));
  assert.doesNotMatch(html, /data-last-updated-source/);
});
