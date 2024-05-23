// The parallax function
const parallax = (elements, speed) => {
    if ('undefined' !== elements && elements.length > 0) {
        elements.forEach( element => {
            let y = window.innerHeight - element.getBoundingClientRect().top
            if (y > 0) {
                element.style.transform = 'translate3d(-' + (speed * y) + 'px, 0 ,0)'
            }
        })
    }
}
