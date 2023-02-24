const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
const num_stage = document.getElementById('num-stage')
const stages = document.querySelectorAll('.stage')

let currentActiveCircle = 1

next.addEventListener('click', () => {
    currentActiveCircle++

    if (currentActiveCircle > circles.length) {
        currentActiveCircle = circles.length
    }

    num_stage.innerText = currentActiveCircle - 1
    update()
})

prev.addEventListener('click', () => {
    currentActiveCircle--

    if (currentActiveCircle < 1) {
        currentActiveCircle = 1
    }

    num_stage.innerText = currentActiveCircle - 1
    update()
})

function update() {

    circles.forEach((circle, idx) => {
        if(idx < currentActiveCircle) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    
        stages.forEach((stage, idx) => {
            if(idx < currentActiveCircle) {
                removeSActiveClasses()
                stage.classList.add('s-active')
            }
        })

        const actives = document.querySelectorAll('.active')
        progress.style.width = (actives.length - 1) *25 +'%'
    })

    if(currentActiveCircle === 1) {
        prev.disabled = true
    } else if (currentActiveCircle === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }

}

function removeSActiveClasses() {
    stages.forEach(stage => {
        stage.classList.remove('s-active')
    })
}