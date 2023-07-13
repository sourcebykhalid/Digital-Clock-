const clock = document.querySelector(".time");

setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
  clock.computedStyleMap.fontsize = "85px";
}, 1000);
