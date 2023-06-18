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
  const cursorOffset = cursor.getBoundingClientRect();
  const cursorCenterX = cursorOffset.left + cursorOffset.width / 2;
  const cursorCenterY = cursorOffset.top + cursorOffset.height / 2;

  const deltaX = clientX - cursorCenterX;
  const deltaY = clientY - cursorCenterY;

  bigBall.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
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
