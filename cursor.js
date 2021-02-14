const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

const links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("mouseenter", (e) => {
    cursor.classList.add("zoomin");
  });
  link.addEventListener("mouseleave", (e) => {
    cursor.classList.remove("zoomin");
  });
});
