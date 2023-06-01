function whenReady(fn: () => void) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

whenReady(() => {
  const tickElement = document.getElementById("tick");

  if (tickElement) {
    setInterval(() => {
      tickElement.innerText = new Date().toLocaleTimeString();
    }, 1000);
  }
});
