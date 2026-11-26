document.addEventListener("DOMContentLoaded", () => {
    // time stamp
    const timestampInput = document.querySelector("#timestamp");
    if (timestampInput) {
        timestampInput.value = new Date().toLocaleString();
    }

    // modals
    const openButtons = document.querySelectorAll("[data-modal]");
    const closeButtons = document.querySelectorAll(".close-modal");

    openButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const modalId = button.dataset.modal;
            const modal = document.getElementById(modalId);
            if (modal && typeof modal.showModal === "function") {
                modal.showModal();
            }
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const modal = button.closest("dialog");
            if (modal) {
                modal.close();
            }
        });
    });

    // close modals backdrop
    const modals = document.querySelectorAll("dialog");
    modals.forEach((modal) => {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.close();
            }
        });
    });
});