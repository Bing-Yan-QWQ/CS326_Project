function showView(viewId) {
    const views = document.querySelectorAll('.view');
    views.forEach(view => {
        view.style.display = 'none';
    });
    document.getElementById(viewId).style.display = 'block';
}

// Init APP
function initApp() {
    //load usr data
    const user = JSON.parse(localStorage.getItem('user')) || { name: 'Guest' };
    document.getElementById('profile').innerHTML = `<h2>Profile</h2><p>Welcome, ${user.name}</p>`;

    // EL Test
    document.getElementById('testButton')?.addEventListener('click', function() {
        alert('Button clicked!');
    });
}

// Save
function saveUserData(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

// Init load
window.onload = initApp;
