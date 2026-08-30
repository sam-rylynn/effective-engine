(function loadLocalBrandGalleryReview(globalScope) {
  "use strict";

  const protocol = String(globalScope.location?.protocol || "").toLowerCase();
  const hostname = String(globalScope.location?.hostname || "").toLowerCase();
  const localHosts = new Set(["localhost", "127.0.0.1", "::1", "[::1]"]);
  const enabled = protocol === "file:"
    || (["http:", "https:"].includes(protocol) && localHosts.has(hostname));
  globalScope.__COMMERCIAL_DNA_LOCAL_BRAND_REVIEW_ENABLED__ = enabled;
  if (!enabled) return;

  globalScope.document.write(
    '<script src="approved-brand-expansion-gallery-review-v0-1.js?v=20260830-approved-twenty-one-01"><\/script>'
      + '<script src="brand-gallery-review-v0-1.js?v=20260830-approved-twenty-one-01"><\/script>',
  );
})(typeof window !== "undefined" ? window : globalThis);
