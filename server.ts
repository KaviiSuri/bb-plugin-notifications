import type { BbPluginApi } from "@bb/plugin-sdk";

// BBN-20 THROWAWAY PROTOTYPE: prove service-worker delivery through BB's real
// plugin server path. This is intentionally not production notification code.
const serviceWorkerSource = `
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));
self.addEventListener("message", (event) => {
  if (event.data === "BBN-20_PING") {
    event.source?.postMessage({ type: "BBN-20_PONG", scope: self.registration.scope });
  }
});
`;

export default function plugin(bb: BbPluginApi): void {
  bb.http.route("GET", "/sw.js", () =>
    new Response(serviceWorkerSource, {
      headers: {
        "Content-Type": "application/javascript; charset=utf-8",
        "Service-Worker-Allowed": "/",
        "Cache-Control": "no-store",
      },
    }),
  );
}
