(function loadLocalBrandGalleryReview(globalScope) {
  "use strict";

  const enabled = globalScope.location?.protocol === "file:";
  globalScope.__COMMERCIAL_DNA_LOCAL_BRAND_REVIEW_ENABLED__ = enabled;
  if (!enabled) return;

  globalScope.document.write(
    '<script src="brand-gallery-review-v0-1.js?v=20260826-local-review-01"><\/script>',
  );
})(typeof window !== "undefined" ? window : globalThis);
