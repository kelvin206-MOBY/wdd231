// Select HTML elements

const directoryContainer = document.querySelector("#directory-container");

const gridButton = document.querySelector("#grid-button");
const listButton = document.querySelector("#list-button");

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#primary-nav");


// Display current year

document.querySelector("#current-year").textContent =
    new Date().getFullYear();


// Display last modified date

document.querySelector("#last-modified").textContent =
    `Last modified: ${document.lastModified}`;


// Load business information

async function getMembers() {

    try {

        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Could not load business information.");
        }

        const members = await response.json();

        displayMembers(members);

    } catch (error) {

        directoryContainer.textContent =
            "Unable to load the business directory.";

        console.error(error);

    }

}


// Display business cards

function displayMembers(members) {

    directoryContainer.innerHTML = "";

    members.forEach(member => {

        const card = document.createElement("section");

        card.classList.add("business-card");


        const image = document.createElement("img");

        image.src = member.image;
        image.alt = `${member.name} business image`;
        image.loading = "lazy";


        const name = document.createElement("h2");

        name.textContent = member.name;


        const address = document.createElement("p");

        address.textContent = member.address;


        const phone = document.createElement("p");

        phone.textContent = member.phone;


        const website = document.createElement("a");

        website.href = member.website;
        website.textContent = "Visit Website";
        website.target = "_blank";
        website.rel = "noopener noreferrer";


        const membership = document.createElement("p");

        membership.classList.add("membership");


        if (member.membership === 3) {

            membership.textContent = "Gold Membership";

        } else if (member.membership === 2) {

            membership.textContent = "Silver Membership";

        } else {

            membership.textContent = "Member";

        }


        card.append(
            image,
            name,
            address,
            phone,
            website,
            membership
        );


        directoryContainer.appendChild(card);

    });

}


// Grid view

gridButton.addEventListener("click", () => {

    directoryContainer.classList.remove("list-view");

    directoryContainer.classList.add("grid-view");

    gridButton.setAttribute("aria-pressed", "true");

    listButton.setAttribute("aria-pressed", "false");

});


// List view

listButton.addEventListener("click", () => {

    directoryContainer.classList.remove("grid-view");

    directoryContainer.classList.add("list-view");

    listButton.setAttribute("aria-pressed", "true");

    gridButton.setAttribute("aria-pressed", "false");

});


// Mobile navigation

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.setAttribute("aria-expanded", isOpen);

});


// Start loading the directory

getMembers();