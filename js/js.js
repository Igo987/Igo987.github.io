
let navList = document.querySelector(".nav__list");
let search = document.querySelector(".search__button");
let input = document.querySelector(".search__input");
let subparagraph = document.querySelector(".nav__subparagraph");

let close = document.createElement("div");
close.classList.add("close");

let add = document.createElement("div");
add.classList.add("add");

search.addEventListener("click", (evt) => {
    evt.preventDefault();
    
    input.classList.add("active");
    search.style.display = "none";
    search.before(close);
    close.addEventListener("click", () => {
        input.classList.remove("active");
        search.style.display = "block";
        close.remove();
    })
})

let menu = document.querySelector(".header__menu");
let nav = document.querySelector(".header__nav");
let contact = document.querySelector(".header__phone");
let searchInput = document.querySelector(".search");
let item = document.querySelectorAll(".nav__item");

menu.addEventListener("click", () => {
  if (document.body.clientWidth > 500) {
    nav.classList.toggle("grid");
    input.classList.remove("active");
  } else {nav.classList.toggle("block");
  navList.classList.toggle("block");
  input.classList.add("active");
  input.style.position = "relative";
  navList.prepend(input); 
  navList.prepend(contact); 
  }
           
});

Array.from(item).map(el => el.addEventListener("click", () => {
    if (el.children.length>1) {
        subparagraph.classList.toggle("block");
    }
}))












