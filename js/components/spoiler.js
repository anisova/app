// Функция для работы спойлера
function spoiler() {
    const drop = document.querySelectorAll(".spoiler__item");
    drop.forEach(function (item) {
        item.addEventListener("click", function (event) {
            const content = item.querySelector('.spoiler__content');
            event.preventDefault();
            let target = event.target;
            for (i = 0; i < drop.length; i++) {
                if (drop[i] != item) {
                    drop[i].classList.remove("active");
                    drop[i].querySelector('.spoiler__content').style.maxHeight = '0';
                }
            }
            if (target.classList.contains("drop")) {                
                if (item.classList.contains("active")) {                    
                    item.classList.remove("active");
                    content.style.maxHeight = '0';
                } else {
                    item.classList.add("active");
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            }
        });
    });
}
spoiler();