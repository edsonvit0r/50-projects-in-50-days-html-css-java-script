const date = document.getElementById('date')
const adviceP = document.getElementById('advice')
const btnNew_advice = document.getElementById('btnNew_advice')

date.innerText = new Date().toLocaleDateString('pt-BR')

btnNew_advice.addEventListener('click', newAdvice)

newAdvice()

function newAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then((response) => {
        return response.json()
    })
    .then((response2) => {
        adviceP.innerText = response2.slip.advice
    })
}

