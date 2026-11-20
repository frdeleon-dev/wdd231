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

    const qualifiedMembers = members.filter(member =>
        member.membershipLevel >= 2
    );

    qualifiedMembers.sort(() => Math.random() - 0.5);

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