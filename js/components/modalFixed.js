// Функция работы модального окна с формой
function toggleModal(modalWindow, openButton, closeButton) {
  const openBtns = document.querySelectorAll(openButton);
  const modal = document.querySelector(modalWindow);
  if (modal) {
    const closeBtn = modal.querySelector(closeButton);
    // const cancel = modal.querySelector(".cancel");
    openBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let paddingoffset =
          window.innerWidth - document.body.offsetWidth + "px";
        e.preventDefault();
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = paddingoffset;
        modal.classList.add("active");
      });
    });
    closeBtn.addEventListener("click", () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      modal.classList.remove("active");
    });
    //   if (cancel) {
    //     cancel.addEventListener("click", () => {
    //       closeBtn.click();
    //     });
    //   }
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeBtn.click();
      }
    });
  }
}
toggleModal(".modal", ".btn", ".btn-close");
