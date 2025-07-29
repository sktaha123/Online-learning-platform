function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    if (!username || !password) {
        alert('Please enter a username and password.');
        return;
    }
    if (localStorage.getItem('user_' + username)) {
        alert('Username already exists.');
        return;
    }
    localStorage.setItem('user_' + username, password);
    alert('Signup successful! Please login.');
    window.location.href = 'login.html';
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const storedPassword = localStorage.getItem('user_' + username);
    if (storedPassword && storedPassword === password) {
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password.');
    }
} 