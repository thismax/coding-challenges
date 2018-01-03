const displayTime = () => {
  let el = document.getElementById('clock');
  let time = new Date();
  el.innerHTML = time.toLocaleTimeString();
  setTimeout(displayTime, 1000);
};

displayTime();
