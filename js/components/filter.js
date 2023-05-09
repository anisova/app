const filterCards = document.querySelectorAll('.card');
document.querySelector('.filter-menu').addEventListener('click', (event) => {    
    if (event.target.tagName !== 'DIV') return false;
    let filterClass = event.target.dataset['f'];
    filterCards.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });
});