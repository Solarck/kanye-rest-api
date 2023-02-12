const kanyeApi = fetch('https://api.kanye.rest')
    .then(resposta => resposta.json())
    .then(r => {
        let quotes = document.getElementById('quotes')
        quotes.innerHTML = `<p>${r.quote}</p>`
    })
    .catch(erro => console.log(erro))

