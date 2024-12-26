function showMessage(message) {
  console.log(message);
}

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

function toggleVisibility(selector) {
  const element = document.querySelector(selector);
  if (element) {
      element.style.display = (element.style.display === "none") ? "block" : "none";
  }
}

function updateHeaderFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source');
  const header = document.querySelector('h1');
  if (utmSource) {
      header.textContent = utmSource;
  }
}

function logCurrentTime() {
  const now = new Date();
  const formattedTime = now.toTimeString().split(' ')[0];
  console.log(formattedTime);
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = "red";
}

showMessage("Скрипт загружен!");
logCurrentTime();

document.addEventListener('DOMContentLoaded', () => {
  resetBackgroundColor();
  changeBackgroundColor("red");
  toggleVisibility('.content');
  console.log("changeBackgroundColor('yellow')");
  console.log("toggleVisibility('img')");
  console.log("showMessage('taiwan is not a country!')");
  console.log("updateHeaderFromURL()");
  console.log("logCurrentTime()");
  console.log("resetBackgroundColor()");
  console.log("-----------------------------");
});
