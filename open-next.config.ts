import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Minimal OpenNext config for Cloudflare Pages.
// Uses static-assets incremental cache (no KV/R2/DO required).
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  // Intercept cache reads/writes via Workers static assets where possible.
  enableCacheInterception: true,
});
