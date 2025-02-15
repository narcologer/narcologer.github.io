const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

document.getElementById("menu-toggle").addEventListener("click", function () {
    const navbar = document.querySelector(".navbar");
    const isAtTop = window.scrollY === 0;
    const isOpen = navbar.classList.contains("open");

    if (isOpen) {
        // Если меню открыто и пользователь наверху, закрываем
        if (isAtTop) {
            navbar.classList.remove("open");
        } else {
            // Если меню открыто, но пользователь не наверху – просто скроллим
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    } else {
        // Если меню закрыто, открываем и, если нужно, скроллим наверх
        navbar.classList.add("open");
        if (!isAtTop) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }
});
