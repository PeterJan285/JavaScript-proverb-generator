const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'An apple a day keeps the doctor away.',
    'Grief divided is made lighter.',
    'Half a loaf is better than none.',
    'Honesty is the best policy.',
    'Hope for the best, prepare for the worst.',
    'A good listener is a silent flatterer.',
    'A rising tide lifts all boats.',
    'If you cant stand the heat, get out of the kitchen.',
    'If you are not part of the solution, you are part of the problem.',
    'A ship in the harbor is safe, but that is not what a ship is for.',
    'Well begun is half done',
    'All that glitters is not gold.',
    'Every cloud has a silver lining.',
    'Absence makes the heart grow fonder.',
    'All is well that ends well.',
]

button.addEventListener('click', () => createNotification())

function createNotification() {
    const notif = document.createElement('div')
    notif.classList.add('toast')

    notif.innerText = getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)

}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}