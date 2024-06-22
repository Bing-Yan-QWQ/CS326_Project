
function addClub() {
    const nameInput = document.getElementById('clubNameInput');
    const imageInput = document.getElementById('clubImageInput');
    const discordInput = document.getElementById('discordLinkInput');
    const instagramInput = document.getElementById('instagramLinkInput');

    const name = nameInput.value.trim();
    const image = imageInput.value.trim();
    const discord = discordInput.value.trim();
    const instagram = instagramInput.value.trim();

    if (!name) {
        nameInput.classList.add('error');
        return;
    } else {
        nameInput.classList.remove('error');
    }

    const clubs = JSON.parse(localStorage.getItem('clubs')) || [];
    const newClub = {
        name,
        image,
        discord,
        instagram,
        description: 'Description of ' + name 
    };

    clubs.push(newClub);
    localStorage.setItem('clubs', JSON.stringify(clubs));

    nameInput.value = '';
    imageInput.value = '';
    discordInput.value = '';
    instagramInput.value = '';

    window.location.href = 'mainPage.html';
}

function removeClub() {
    const currentClubName = localStorage.getItem('currentClub');
    let clubs = JSON.parse(localStorage.getItem('clubs')) || [];
    clubs = clubs.filter(club => club.name !== currentClubName);
    localStorage.setItem('clubs', JSON.stringify(clubs));
    window.location.href = 'mainPage.html';
}
