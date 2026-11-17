console.log("Spotlights JavaScript is working!");
const membersURL = "data/members.json";
async function getMembers() {
    const response = await fetch(membersURL);
    const members = await response.json();

    const eligibleMembers = members.filter(member =>
    member.membership === 2 || member.membership === 3
 );

 console.log(eligibleMembers);
 const numberToShow = Math.floor(Math.random() * 2) + 2;

 const selectedMembers = eligibleMembers
    .sort(() => Math.random() - 0.5)
    .slice(0, numberToShow);
    const spotlightsContainer = document.querySelector(".spotlights");

 selectedMembers.forEach(member => {

    const membershipLevel = member.membership === 3 ? "Gold" : "Silver";

    spotlightsContainer.innerHTML += `
        <article class="spotlight-card">
            <h3>${member.name}</h3>

            <img src="${member.image}" alt="${member.name}" width="150">

            <p>Address: ${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p>Membership: ${membershipLevel}</p>

            <a href="${member.website}" target="_blank" rel="noopener noreferrer">
                Visit Website
            </a>
        </article>
    `;
 });

 

    console.log(members);
    
}
getMembers();