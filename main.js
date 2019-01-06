const BG_CLASSES = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6'];

function main() {
  const bannerEl = document.querySelector('.banner');
  const bgClass = BG_CLASSES[Math.floor(Math.random() * BG_CLASSES.length)];
  bannerEl.classList.add(bgClass);

  particlesJS.load("particles-js","particlesjs-config.json")
}

main();
