'use strict'

const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove("open");
  scrollIntoView(link);
})

//contack Me

const contactBtn = document.querySelector(".home__contact");

contactBtn.addEventListener('click', () => {
  scrollIntoView("#contact");
})


function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}