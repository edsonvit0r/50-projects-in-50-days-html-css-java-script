const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        replaceActionForDestcClasses()
        panel.classList.add('active')
        panel.classList.remove('dest')
    })
})

function replaceActionForDestcClasses() {
    panels.forEach(panel => {
        panel.classList.replace('active', 'dest')
    })
}