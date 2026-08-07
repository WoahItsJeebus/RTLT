import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

for (const route of [
  { path: "/", title: /Know what counts/, copy: /Processed in your browser/ },
  { path: "/privacy", title: /Privacy Policy/, copy: /Clear about every request/ },
  { path: "/support", title: /Support/, copy: /Get back to a clear view/ },
]) {
  test(`server-renders ${route.path}`, async () => {
    const response = await render(route.path);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

    const html = await response.text();
    assert.match(html, route.title);
    assert.match(html, route.copy);
    assert.match(html, /Robux Limit Tracker/);
    assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/);
  });
}
