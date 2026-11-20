const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#primary-nav");
menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.setAttribute("aria-expanded", isOpen);


});

const membershipLinks = document.querySelectorAll(".membership-card a");
membershipLinks.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        const modalId = link.getAttribute("href");

        const modal = document.querySelector(modalId);

        modal.showModal();

    });

});

const timestampField = document.querySelector("#timestamp");

if (timestampField) {
    timestampField.value = new Date().toISOString();
}

document.querySelector("#current-year").textContent =
    new Date().getFullYear();


// Display last modified date

document.querySelector("#last-modified").textContent =
    `Last modified: ${document.lastModified}`;