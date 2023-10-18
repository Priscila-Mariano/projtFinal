const frase = document.querySelector('.frase')

fetch('https://api.breakingbadquotes.xyz/v1/quotes/5')
.then(response => response.json())
.then(lista => {
    
    frase.innerHTML = lista[3].quote
    /*frase.innerHTML += lista[3].quote*/
})