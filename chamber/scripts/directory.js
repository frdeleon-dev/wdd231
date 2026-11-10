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