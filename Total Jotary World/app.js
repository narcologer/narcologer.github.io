const comments = [
    {
      id: 1,
      name: "MycoLofi",
      text:
        "Easily one of my favorite hacks. Beautiful work fancy mammal <3",
    },
    {
      id: 2,
      name: "LordDarkScythe",
      text:
        "One of the first ROM Hacks to be played on my new FXPAK Pro. Plays great, lots of fun. Would recommend.",
    },
    {
      id: 3,
      name: "Natsuz2",
      text:
        "it seems interesting to me",
    },
    {
      id: 4,
      name: "blueribbonhighlife",
      text:
        "Very fun levels, good challenge level for category, nice custom bosses. Lots of good chocolate including some nice custom enemies!",
    },
  ];

const author = document.getElementById("author");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    const item = comments[currentItem];
    author.textContent = item.name;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = comments[person];
    author.textContent = item.name;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > comments.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = comments.length - 1;
    }
    showPerson(currentItem);
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
