import { access, cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const clientDirectory = resolve(projectRoot, "dist", "client");
const outputDirectory = resolve(projectRoot, "site-dist");
const publicBasePath = "/RTLT";
const publicOrigin = "https://woahitsjeebus.github.io";

const routes = [
  { requestPath: "/", outputPath: "index.html" },
  { requestPath: "/privacy", outputPath: "privacy/index.html" },
  { requestPath: "/support", outputPath: "support/index.html" },
];

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch (error) {
    if (error?.code === "ENOENT") {
      return false;
    }
    throw error;
  }
}

function makeStatic(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*>/gi, "")
    .replace(/\sdata-rsc-css-href=["'][^"']*["']/gi, "")
    .replace(/<meta\b[^>]*name=["']robots["'][^>]*>/gi, "")
    .replaceAll(`${publicOrigin}/og.png`, `${publicOrigin}${publicBasePath}/og.png`)
    .replace(/(href|src)=["']\/(?!\/)/gi, `$1="${publicBasePath}/`)
    .replaceAll(`href="${publicBasePath}/privacy"`, `href="${publicBasePath}/privacy/"`)
    .replaceAll(`href="${publicBasePath}/support"`, `href="${publicBasePath}/support/"`);
}

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

for (const asset of [
  "_next/static/css",
  "_next/static/_vinext_fonts",
  "icon.png",
  "og.png",
]) {
  const source = resolve(clientDirectory, asset);
  if (await exists(source)) {
    await cp(source, resolve(outputDirectory, asset), { recursive: true });
  }
}

const workerUrl = pathToFileURL(resolve(projectRoot, "dist", "server", "index.js"));
workerUrl.searchParams.set("static", `${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`${publicOrigin}${route.requestPath}`, {
      headers: {
        accept: "text/html",
        "x-forwarded-host": "woahitsjeebus.github.io",
        "x-forwarded-proto": "https",
      },
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

  if (!response.ok) {
    throw new Error(`Unable to render ${route.requestPath}: ${response.status}`);
  }

  const outputPath = resolve(outputDirectory, route.outputPath);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, makeStatic(await response.text()), "utf8");
}

await writeFile(resolve(outputDirectory, ".nojekyll"), "", "utf8");

const home = await readFile(resolve(outputDirectory, "index.html"), "utf8");
if (!home.includes("Robux Limit Tracker")) {
  throw new Error("The static home page did not render correctly.");
}

