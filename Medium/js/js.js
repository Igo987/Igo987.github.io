// header link
let links = document.querySelectorAll('.header__link');
let arrayLinks = Array.from(links);
for (let i = 0; i < arrayLinks.length; i++) {
    arrayLinks[i].addEventListener('click', function () {
        arrayLinks.map(el => el.classList.remove('header__link_active'));
        arrayLinks[i].classList.add('header__link_active');
    })
}

// stars
let stars = document.querySelectorAll('.stars__image');
let arrayStars = Array.from(stars);
for (let i = 0; i < arrayStars.length; i++) {
    arrayStars[i].addEventListener('click', function () { 
        arrayStars.map(el => el.src='./images/star.png'); 
        let indexOfelement =  arrayStars.indexOf(arrayStars[i]);
        let newArr =  arrayStars.slice(indexOfelement + 1);
        newArr.map(el => el.src='./images/star_off.png');
        }
)}