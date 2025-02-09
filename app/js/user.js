async function getUser() {

    let userData = sessionStorage.getItem("userData");

    if (userData) {
        renderUser(JSON.parse(userData));
        sessionStorage.setItem("isLoggedIn", JSON.stringify(true));
        return;
    }

    try {
        const response = await fetch('http://localhost:8080/api/userInfo',{credentials: 'include'});

        if (response.ok) {
            const data = await response.json();
            const expiresIn = data.expiresAt;
            const expiresAt = Date.now() + expiresIn;
            delete data.expiresAt;
            sessionStorage.setItem("userData", JSON.stringify(data));
            sessionStorage.setItem("isLoggedIn", JSON.stringify(true));
            sessionStorage.setItem("expiresAt", JSON.stringify(expiresAt));
            renderUser(data);
        }

        location.reload();
    }catch(err) {
        console.error('Error while fetching user data:', err);
    }
}

getUser();

function renderUser(user){
    const emailContainer = document.getElementById('email');
    emailContainer.innerHTML = user.email;

    const firstNameContainer = document.getElementById('firstName');
    firstNameContainer.innerHTML = user.firstname;

    const lastNameContainer = document.getElementById('lastName');
    lastNameContainer.innerHTML = user.lastname;
}