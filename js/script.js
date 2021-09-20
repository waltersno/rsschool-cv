window.onload = function() {
    const nav = document.querySelector('.nav')
    const button = document.querySelector('.burger-wrapper')
    const myFunc = () => {
        if (nav.classList.contains('show')) {
            nav.classList.remove('show')
        } else {
            nav.classList.add('show')
        }
    }
    
    button.addEventListener('click', myFunc);
}
