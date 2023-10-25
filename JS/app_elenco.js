const url = "https://api.breakingbadquotes.xyz/v1/quotes"

const frase = document.querySelector('.frase')
const autor = document.querySelector('.autor')

fetch(url)
.then(response => response.json())
.then(lista => {
    frase.innerHTML = lista[0].quote
    autor.innerHTML = lista[0].author
    console.log(lista)
})

