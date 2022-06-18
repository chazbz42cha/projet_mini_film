let container = document.querySelector(".container-card");

async function getMovies() {
    const url = "https://www.omdbapi.com/?s=star%20wars&plot=short&apikey=2a4831ba"
    const response = await fetch(url)
    const data = await response.json()
    return data.Search
}

const data = getMovies().then(function(movies) {
    console.log(movies)

    movies.forEach(function(movie) {
        const card = document.createElement("div")
        card.classList.add("card")

        const img = document.createElement("img")
        img.setAttribute("src", movie.Poster)
        img.classList.add("card-img-top")
        card.appendChild(img)

        const cardBody = document.createElement("div")
        cardBody.classList.add("card-body")
        card.appendChild(cardBody)

        const cardTitle = document.createElement("h5")
        cardTitle.classList.add("card-title")
        cardTitle.textContent = movie.Title
        cardBody.appendChild(cardTitle)

        const cardText = document.createElement("p")
        cardText.classList.add("card-text")
        cardText.textContent = movie.Year
        cardBody.appendChild(cardText)


        container.appendChild(card)
    })
})