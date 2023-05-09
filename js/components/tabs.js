//Функция переключения табов
function toggleTab() {
    tabs = document.querySelectorAll(".tab");
    tabContents = document.querySelectorAll(".tab-content");
    console.log(tabs);
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", () => {
        for (let i = 0; i < tabs.length; i++) {
          tabs[i].classList.remove("active");
          tabContents[i].classList.remove("active");
        }
        tabs[i].classList.add("active");
        tabContents[i].classList.add("active");
      });
    }
  }
  toggleTab();