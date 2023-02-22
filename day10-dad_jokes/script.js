const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()


//Com async await
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res =  await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    jokeEl.innerHTML = data.joke

}


//Com .then()
/*
    //fetch com variável de configuração
function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    fetch('https://icanhazdadjoke.com', config)
        .then((res) => res.json())
        .then((data) => {
            jokeEl.innerHTML = data.joke
        })
}
*/


//Com .then() 
/*
    //Poderiamos fazer o fetch sem a variável config que ficaria assim: 

    function generateJoke() {

    fetch ('https://icanhazdadjoke.com', {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then((res) => res.json())
        .then((data) => {
            jokeEl.innerHTML = data.joke
        })
}

*/