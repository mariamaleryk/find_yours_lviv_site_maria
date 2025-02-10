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

function renderUser(user){
    const emailContainer = document.getElementById('email');
    emailContainer.innerHTML = user.email;

    const firstNameContainer = document.getElementById('firstName');
    firstNameContainer.innerHTML = user.firstname;

    const lastNameContainer = document.getElementById('lastName');
    lastNameContainer.innerHTML = user.lastname;
}

function showSettings(){
    const settingsButton = document.getElementById('settingsButton');
    const profileSettings = document.getElementById('profileSettings');
    settingsButton.addEventListener('click', e => {
        const profileSettingsState = profileSettings.style.display;

        if(profileSettingsState === 'block'){
            profileSettings.style.display = 'none';
        }else{
            profileSettings.style.display = 'block';
        }
    })
}

function updateFirstName(){
    document.getElementById('updateFirstNameForm').addEventListener('submit',(evt)=>{
        evt.preventDefault();
        const newFirstName = document.getElementById('newFirstName').value;
        console.log(newFirstName);
    })
}

function updateLastName(){
    document.getElementById('updateLastNameForm').addEventListener('submit',(evt)=>{
        evt.preventDefault();
        const newLastName = document.getElementById('newLastName').value;
        console.log(newLastName);
    })
}

function deleteProfile(){
    document.getElementById('deleteProfile').addEventListener('click',()=>{
        alert('are you sure?');
    });
}

function handleProfileUpdate() {
    updateFirstName();
    updateLastName();
    deleteProfile();
}

getUser();
showSettings();
handleProfileUpdate();

