const requestedView = new URLSearchParams(window.location.search).get("view") || "opening";
const screens = [...document.querySelectorAll(".preview-screen")];
const selectedView = screens.some((screen) => screen.dataset.view === requestedView)
  ? requestedView
  : "opening";

for (const screen of screens) {
  const visible = screen.dataset.view === selectedView;
  screen.classList.toggle("is-visible", visible);
  screen.setAttribute("aria-hidden", String(!visible));
}

document.documentElement.dataset.preview = selectedView;
