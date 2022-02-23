window.onload = () => {
  // Script #1: Processing scroll-to-hash
  window.onhashchange = (hashEvent) => {
    if (hashEvent.oldURL !== hashEvent.newURL && hashEvent.isTrusted && window.location.hash) {
      hashEvent.stopPropagation();
      const element = document.getElementById(window.location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "scrollBehavior" in document.documentElement.style ? "smooth" : undefined, block: "end", inline: "nearest" });
      }
      return false;
    }
  };

  // Script #2: Changing logo & home-link behaviour
  const singleElement = document.querySelector("a.home-link");
  const newHost = "https://zksync.io";

  if (singleElement) {
    singleElement.setAttribute("href", newHost);
    singleElement.setAttribute("target", "_blank");
  }
};
