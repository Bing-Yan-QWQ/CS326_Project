
function initClubDetails() {
    const clubName = localStorage.getItem('currentClub');
    const clubs = JSON.parse(localStorage.getItem('clubs')) || [];
    const club = clubs.find(c => c.name === clubName);

    if (club) {
        document.getElementById('clubName').innerText = club.name;
        document.getElementById('clubImage').src = club.image;
        document.getElementById('clubImage').alt = club.name;

        const discordLink = document.getElementById('discordLink');
        const instagramLink = document.getElementById('instagramLink');

        if (club.discord) {
            discordLink.href = club.discord;
            discordLink.classList.remove('disabled');
        } else {
            discordLink.classList.add('disabled');
        }

        if (club.instagram) {
            instagramLink.href = club.instagram;
            instagramLink.classList.remove('disabled');
        } else {
            instagramLink.classList.add('disabled');
        }

        // Load managers (if any)
        const clubManagersContainer = document.getElementById('clubManagers');
        clubManagersContainer.innerHTML = '';
        if (club.managers) {
            club.managers.forEach(manager => {
                const managerDiv = document.createElement('div');
                managerDiv.className = 'manager-card';
                managerDiv.innerHTML = `
                    <img src="${manager.image}" alt="${manager.name}">
                    <h3>${manager.name}</h3>
                    <p>${manager.description}</p>
                `;
                clubManagersContainer.appendChild(managerDiv);
            });
        }
    }
}

// Init
window.onload = initClubDetails;


function removeClub() {
    const currentClubName = localStorage.getItem('currentClub');
    let clubs = JSON.parse(localStorage.getItem('clubs')) || [];
    clubs = clubs.filter(club => club.name !== currentClubName);
    localStorage.setItem('clubs', JSON.stringify(clubs));
    window.location.href = 'mainPage.html';
}
