const checkbox = document.querySelector("#flexSwitchCheckDefault");
const navbar = document.querySelector("nav")
const body = document.querySelector("body");

const titres = document.querySelectorAll("h5");

checkbox.addEventListener('click', function() {
    body.classList.toggle("darkmode");
    titres.forEach(titre => {
        titre.classList.toggle("darkmode");
    })
});