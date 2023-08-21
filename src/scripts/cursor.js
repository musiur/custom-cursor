// grabing elements

const body = document.getElementsByTagName("body")[0];



const cursor = document.querySelector(".cursor");
const pointer = document.querySelector(".pointer");



body.addEventListener("mouseenter", () => {
    cursor.style.opacity = "100%";
})

body.addEventListener("mouseleave", () => {
    cursor.style.opacity = "40%";
})




const moveCursor = (e) => {
  const cursorX = cursor.getBoundingClientRect().left;
  const cursorY = cursor.getBoundingClientRect().top;

  console.log(cursorX, cursorY);
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursor.style.width = "35px";
  cursor.style.height = "35px";

  cursor.style.transform = `translate3d(${mouseX - 15}px, ${mouseY - 15}px, 0)`;
  pointer.style.transform = `translate3d(${mouseX - 15}px, ${mouseY - 15}px, 0)`;

  setTimeout(() => {
    cursor.style.width = "30px";
    cursor.style.height = "30px";
  }, 200);
};
window.addEventListener("mousemove", moveCursor);
