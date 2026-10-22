(function () {
  var started = false;
  function load() {
    if (started) return;
    started = true;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      "gtm.start": new Date().getTime(),
      event: "gtm.js",
    });
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtm.js?id=GTM-PZXSHH55";
    document.head.appendChild(s);
  }
  ["pointerdown", "keydown", "scroll", "touchstart"].forEach(function (e) {
    window.addEventListener(e, load, { once: true, passive: true });
  });
})();
