const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Mesage One',
    'Mesage Two',
    'Mesage Three',
    'Mesage Four',
]

const types =  ['info', 'success', 'error']



button.addEventListener('click', () => createNotification())


function createNotification(massage = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())

    notif.innerText = massage ? massage :getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {notif.remove()},3000)
}


function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}