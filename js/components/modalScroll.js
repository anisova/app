// Функция работы модального окна корзины
function toggleModal(modalWindow, openButton, closeButton) {
  const openBtns = document.querySelectorAll(openButton),
    modal = document.querySelector(modalWindow),
    closeBtn = modal.querySelector(closeButton),
    overlay = document.querySelector(".overlay");
  if (modal) {
    openBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("active");
        overlay.classList.add("active");
        window.scrollTo({ top: 0 });
      });
    });
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
        overlay.classList.remove("active");
      });
    }
    overlay.addEventListener("click", (e) => {
      if (e.target == overlay) {
        closeBtn.click();
      }
    });
  }
}
toggleModal(".modal", ".btn", ".btn-close");
