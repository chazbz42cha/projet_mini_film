let theme = document.querySelector(".body");


theme.addEventListener("click", (e) => {

    e.target.classList.toggle("body-dark");
    e.target.classList.toggle("body-white");
    //circle.classList.toggle("body-dark");

});




let texte = document.querySelector(".dark-texte");


texte.addEventListener("click", (e) => {

    e.target.classList.toggle("white-texte");
    e.target.classList.toggle("dark-texte");
    //circle.classList.toggle("body-dark");

});