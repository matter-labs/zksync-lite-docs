let lastHash = "";

function locationHashChanged (event) {
  try {
    if (!event || !event.isTrusted) {
      return;
    }
    const currentLocation = (event.path && event.path.length > 0 && event.path[0] && event.path[0].location) ? event.path[0].location : window.location;
    if (currentLocation && currentLocation.hash !== "" && currentLocation.hash !== lastHash) {
      const element = document.querySelector(currentLocation.hash);
      if (element) {
        if (event.hasOwnProperty('stopPropagation')) {
          event.stopPropagation();
        }
        if (element.hasOwnProperty('scrollIntoViewIfNeeded')) {
          element.scrollIntoViewIfNeeded(true);
        } else {
          element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
        }
        lastHash = currentLocation.hash;
        return false;
      }
    }
  } catch (err) {
    console.debug(err);
  }
}

window.addEventListener('loadeddata', (event) => {
  locationHashChanged(event);
});

document.addEventListener('readystatechange', (event) => {
  locationHashChanged(event);
});

// Script #1: Processing scroll-to-hash
window.addEventListener('hashchange', (event) => {
  locationHashChanged(event);
});

// Script #2: Changing logo & home-link behaviour
window.addEventListener('DOMContentLoaded', (event) => {
  locationHashChanged(event);
  const singleElement = document.querySelector('a.home-link');
  const newHost = 'https://zksync.io';

  if (singleElement) {
    singleElement.setAttribute('href', newHost);
    singleElement.setAttribute('target', '_blank');
  }
});

