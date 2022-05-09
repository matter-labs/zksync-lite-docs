let lastHash = "";

function locationHashChanged (event) {
  try {
    if (!event || !event.isTrusted) {
      return;
    }
    const currentLocationHash = (event.path && event.path.length > 0 && event.path[0] && event.path[0].location && event.path[0].location.hash) ? event.path[0].location : window.location.hash;
    console.log("\n\ncurrentLocationHash: ", currentLocationHash)
    console.log("currentLocationHash.hash: ", currentLocationHash.hash)
    console.log("lastHash: ", lastHash, currentLocationHash && currentLocationHash.hash !== "" && currentLocationHash.hash !== lastHash)
    if (currentLocationHash && currentLocationHash.hash !== "" && currentLocationHash.hash !== lastHash) {
      const element = document.querySelector(currentLocationHash.hash);
      console.log("element: ", element)
      if (element) {
        if (event.hasOwnProperty('stopPropagation')) {
          console.log(1);
          event.stopPropagation();
        }
        if (element.hasOwnProperty('scrollIntoViewIfNeeded')) {
          console.log(2);
          element.scrollIntoViewIfNeeded(true);
        } else {
          console.log(3);
          element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
        }
        console.log("Set lastHash to ", currentLocationHash.hash);
        lastHash = currentLocationHash.hash;
        return false;
      }
    }
  } catch (err) {
    console.debug(err);
  }
}

window.addEventListener('loadeddata', (event) => {
  console.log("loadeddata");
  locationHashChanged(event);
});

document.addEventListener('readystatechange', (event) => {
  console.log("readystatechange");
  locationHashChanged(event);
});

// Script #1: Processing scroll-to-hash
window.addEventListener('hashchange', (event) => {
  console.log("hashchange");
  locationHashChanged(event);
});

// Script #2: Changing logo & home-link behaviour
window.addEventListener('DOMContentLoaded', (event) => {
  console.log("DOMContentLoaded");
  locationHashChanged(event);
  const singleElement = document.querySelector('a.home-link');
  const newHost = 'https://zksync.io';

  if (singleElement) {
    singleElement.setAttribute('href', newHost);
    singleElement.setAttribute('target', '_blank');
  }
});
