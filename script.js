const toggleBtn = document.getElementById("themeToggle");
let isPurple = false;

toggleBtn.addEventListener("click", () => {
  const root = document.documentElement;

  if (!isPurple) {
    // تغيير الألوان إلى البنفسجي الهادي
    root.style.setProperty('--nassr-yellow', '#e0bbff');
    root.style.setProperty('--nassr-blue', '#b388eb');
    root.style.setProperty('--gold', '#d1c4e9');
    root.style.setProperty('--bg-color', '#f3e5f5');
    root.style.setProperty('--text-color', '#2e003e');

    toggleBtn.textContent = "yellow";
    isPurple = true;
  } else {
    // رجوع لألوان النصر
    root.style.setProperty('--nassr-yellow', '#f9d616');
    root.style.setProperty('--nassr-blue', '#002868');
    root.style.setProperty('--gold', '#ffd700');
    root.style.setProperty('--bg-color', '#fffdf4');
    root.style.setProperty('--text-color', '#111');

    toggleBtn.textContent = "purple";
    isPurple = false;
  }
});