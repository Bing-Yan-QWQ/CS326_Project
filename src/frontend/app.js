// switch view
function showView(viewId) {
    const views = document.querySelectorAll('.view');
    views.forEach(view => {
        view.style.display = 'none';
    });
    document.getElementById(viewId).style.display = 'block';
    if (viewId === 'home') {
        loadClubs();
    }
}


function loadClubs() {
    const clubsActivitiesContainer = document.getElementById('clubsActivities');
    clubsActivitiesContainer.innerHTML = '';
    const clubs = JSON.parse(localStorage.getItem('clubs')) || [];
    clubs.forEach(club => {
        const clubDiv = document.createElement('div');
        clubDiv.className = 'club-activity';
        clubDiv.onclick = () => viewDetails(club.name);
        clubDiv.innerHTML = `
            <img src="${club.image || 'https://github.com/Bing-Yan-QWQ/CS326_Project/blob/main/no-image-available-icon-vector.jpg'}" alt="${club.name}">
            <h3>${club.name}</h3>
            <p>${club.description}</p>
        `;
        clubsActivitiesContainer.appendChild(clubDiv);
    });
}

// init
window.onload = () => {
    loadClubs();
};


function viewDetails(name) {
    localStorage.setItem('currentClub', name);
    window.location.href = 'clubPage.html';
}
