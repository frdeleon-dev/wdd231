const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("#navigation a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});