const cursor = document.querySelector(".custom-cursor");
const cursorSize = 15; // Adjust the cursor size if needed

document.body.addEventListener("mousemove", debounce(onMouseMove, 10));

function onMouseMove(event) {
  const cursorOffset = cursorSize / 2;
  cursor.style.top = event.clientY - cursorOffset + "px";
  cursor.style.left = event.clientX - cursorOffset + "px";
}

// Toggle mode
const body = document.body;
const text = document.querySelector("h6");
document.querySelector(".toggle-switch").addEventListener("click", toggleMode);

function toggleMode() {
  body.classList.toggle("dark-mode");
  text.textContent = body.classList.contains("dark-mode") ? "dark" : "light";
}

// Link click event delegation
const linkContainer = document.querySelector(".links");
linkContainer.addEventListener("click", handleLinkClick);

function handleLinkClick(event) {
  event.preventDefault();
  if (event.target.classList.contains("active")) return;
  const links = linkContainer.querySelectorAll(".link a");
  links.forEach((link) => link.classList.remove("active"));
  event.target.classList.add("active");
}

// Cursor hover effects
const bigBall = document.querySelector('.cursor__ball');
const hoverables = document.querySelectorAll('.hoverable');
document.body.addEventListener('mousemove', debounce(onMouseMoveHover, 10));

function onMouseMoveHover(event) {
  const { clientX, clientY } = event;
  TweenMax.to(bigBall, .4, {
    x: clientX - 15 + "px",
    y: clientY - 15 + "px"
  });
}

hoverables.forEach(hoverable => {
  hoverable.addEventListener('mouseenter', onMouseHover);
  hoverable.addEventListener('mouseleave', onMouseHoverOut);
});

function onMouseHover() {
  TweenMax.to(bigBall, .3, {
    scale: 4
  });
}

function onMouseHoverOut() {
  TweenMax.to(bigBall, .3, {
    scale: 1
  });
}

// Debounce function to limit the frequency of function calls
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}
