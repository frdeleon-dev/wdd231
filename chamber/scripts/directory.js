const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#directory-cards");


const url = "./data/members.json";


gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});


async function getMembersData() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        displayMembers(data.members);
    } catch (error) {
        console.error("Error to load", error);
    }
}

const displayMembers = (members) => {
    display.innerHTML = "";

    members.forEach((member) => {
        const card = document.createElement("section");
        const image = document.createElement("img");
        image.src = `images/${member.image}`;
        image.alt = `${member.name} logo`;
        image.loading = "lazy";
        image.width = 120;
        image.height = 120;

        const name = document.createElement("h3");
        name.textContent = member.name;
        const address = document.createElement("p");
        address.textContent = member.address;
        const phone = document.createElement("p");
        phone.textContent = member.phone;
        const website = document.createElement("a");
        website.href = member.website;
        website.textContent = "Website";
        website.setAttribute("target", "_blank");
        const membership = document.createElement("p");
        membership.textContent = `Level: ${member.membershipLevel}`;
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(membership);
        card.appendChild(website);
        display.appendChild(card);
    });
};

getMembersData();

//Spot light function

const spotlightContainer = document.querySelector("#spotlight-container");
const membersURL = "data/members.json";

async function loadSpotlights() {
    const response = await fetch(membersURL);

    if (response.ok) {
        const data = await response.json();
        displaySpotlights(data.members);
    } else {
        console.log("Unable to load member data.");
    }
}

function displaySpotlights(members) {

    // Select only Gold (3) and Silver (2) members
    const qualifiedMembers = members.filter(member =>
        member.membershipLevel >= 2
    );

    // Randomize member order
    qualifiedMembers.sort(() => Math.random() - 0.5);

    // Randomly display 2 or 3 members
    const spotlightCount = Math.floor(Math.random() * 2) + 2;

    const spotlightMembers = qualifiedMembers.slice(0, spotlightCount);

    spotlightContainer.innerHTML = "";

    spotlightMembers.forEach(member => {

        const card = document.createElement("article");
        card.classList.add("business-card");

        const membershipLevel =
            member.membershipLevel === 3
                ? "Gold Member"
                : "Silver Member";

        card.innerHTML = `
            <img src="images/${member.image}"
                 alt="${member.name} Logo"
                 loading="lazy">

            <h3>${member.name}</h3>

            <p><strong>Phone:</strong> ${member.phone}</p>

            <p><strong>Address:</strong> ${member.address}</p>

            <p>
                <strong>Website:</strong>
                <a href="${member.website}"
                   target="_blank"
                   rel="noopener noreferrer">
                   Visit Website
                </a>
            </p>

            <p><strong>Membership:</strong> ${membershipLevel}</p>
        `;

        spotlightContainer.appendChild(card);
    });
}

loadSpotlights();