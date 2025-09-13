const changeBgColor = function() {

  const body = document.querySelector("body");

  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  body.style["backgroundColor"] = `rgb(${red}, ${green}, ${blue})`;
};

const addEventListener = (function() {

  const button = document.querySelector("button");
  button.addEventListener("click", () => {
    changeBgColor();
  })
})();