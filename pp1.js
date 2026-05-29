
// MOBILE MENU

const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// ACTIVE NAV LINK

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if(scrollY >= sectionTop - 200){
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if(link.getAttribute("href").includes(current)){
      link.classList.add("active");
    }

  });

});

// SCROLL PROGRESS BAR

window.onscroll = () => {

  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrolled = (winScroll / height) * 100;

  document.getElementById("progress-bar").style.width =
    scrolled + "%";
};

// FADE IN EFFECT

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }

  });

});

document.querySelectorAll(".glass-card").forEach(card => {
  observer.observe(card);
});

