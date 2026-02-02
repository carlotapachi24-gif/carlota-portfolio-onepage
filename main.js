const overlay = document.getElementById("overlay");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

function setOpen(isOpen){
  overlay.classList.toggle("isOpen", isOpen);
  overlay.setAttribute("aria-hidden", String(!isOpen));
  openMenu.setAttribute("aria-expanded", String(isOpen));
  document.body.style.overflow = isOpen ? "hidden" : "";
}

openMenu.addEventListener("click", () => setOpen(true));
closeMenu.addEventListener("click", () => setOpen(false));

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) setOpen(false);
});

overlay.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => setOpen(false));
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setOpen(false);
});
