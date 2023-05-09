//Работа header, который прилипает при пролистывании
window.onload = function() {
    const headerElement = document.querySelector('.header');
    const callback = function (entries,observer) {
        if (entries[0].isIntersecting) {
            headerElement.classList.remove('scroll');
        } else {
            headerElement.classList.add('scroll');            
        }
    }
    const headerObserver = new IntersectionObserver(callback);
    headerObserver.observe(headerElement);
}