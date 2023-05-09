//функция для плавной прокрутки
//для работы функции в html к объекту, с которого переход, нужно добавить класс scrollto

function scrollTo() {
    const anchors = document.querySelectorAll("a.scrollto");
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();        
        const blockID = anchor.getAttribute("href");
        document.querySelector(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  }
  scrollTo();