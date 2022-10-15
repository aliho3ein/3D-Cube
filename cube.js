let cube = document.querySelector(".cube");

window.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  cube.style.transform = `rotateY(${x / 3}deg) rotateX(${y / 2}deg)`;
});
