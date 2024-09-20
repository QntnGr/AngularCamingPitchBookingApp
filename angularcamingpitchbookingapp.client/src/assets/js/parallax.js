// The parallax function
const parallax = (elements, speed, maxPosition) => {
    if ('undefined' !== elements && elements.length > 0) {
        elements.forEach( element => {
            let y = window.innerHeight - element.getBoundingClientRect().top;
            if (y > 0) {
                let translateXpos = speed * y;
                if(translateXpos > maxPosition)
                    translateXpos = maxPosition;
                element.style.transition = 'transform 1s ease';
                element.style.transform = 'translate3d(-' + (translateXpos) + 'px, 0 ,0)';
            }
        })
    }
}
