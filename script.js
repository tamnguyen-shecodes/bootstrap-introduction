function dectectScreenWidth() {
  const element = document.querySelector("#screen-width-display span");

  window.onload = function () {
    element.innerHTML = window.innerWidth + "px";
  };

  window.onresize = function () {
    element.innerHTML = window.innerWidth + "px";
  };
}

dectectScreenWidth();
