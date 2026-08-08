import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
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

