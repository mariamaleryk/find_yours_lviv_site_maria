async function getUser() {

    if(!JSON.parse(sessionStorage.getItem("isLoggedIn"))) {
        const isLoggedIn = await isLogged();
        if(!isLoggedIn) {
            return window.location.href = "http://localhost:3000";
        }
    }

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
            location.reload();
        }
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

    if(user.role === ROLES.REDACTOR){
        const container = document.querySelector('#settingsButton');
        const button = document.createElement('button');
        const img = document.createElement('img');
        img.src = "../../icons/redactorButton.svg";
        button.className = 'redactor-button';
        button.id = 'redactorButton';
        button.appendChild(img);
        container.parentElement.insertBefore(button, container.nextSibling);
        openRedactorPanel(button, user.role);
    }
}

function openRedactorPanel(button, userRole){
    button.addEventListener('click', (e) => {
        if(userRole === ROLES.REDACTOR){
            window.location.href = '../html/redactor-panel.html';
        }else{
            alert("Немає доступу до сторінки редактора");
            return;
        }
    });
}

function showSettings(){
    $("#settingsButton").click(function () {
        $content = $("#profileSettings");
        $content.slideToggle(400);
    });
}

function updateFirstName(){
    document.getElementById('updateFirstNameForm').addEventListener('submit',async (evt)=>{
        evt.preventDefault();

        const submitButton = document.getElementById('updateFirstName');
        submitButton.setAttribute("disabled", "disabled");
        submitButton.style.backgroundColor = 'lightgray';

        const newFirstName = document.getElementById('newFirstName').value;

        const reqBody = new URLSearchParams({
            "newFirstName": newFirstName.trim()
        });

        const error = document.getElementById('error');
        try {
            const response = await fetch('http://localhost:8080/api/user/updateFirstName',
                {
                    credentials: 'include',
                    method: 'PUT',
                    body: reqBody
                });

            if (response.ok){
                sessionStorage.removeItem("userData");
                await getUser();
                return;
            }

            const data = await response.json();
            const errorCode =  data.errorCode;
            error.innerText = '';

            switch (errorCode) {
                case 1:
                    error.innerText = 'Довжина імені немає перевищувати 25 символів.';
                    break;
                case 2:
                    error.innerText = 'Неправильне ім\'я.'
                    break;
                case 3:
                    error.innerText = 'Введіть ім\'я, що відрізняється від поточного.';
                    break;

            }
            error.style.display = 'block';
            submitButton.removeAttribute("disabled");
            submitButton.style.backgroundColor = 'white';
        }catch(err){
            console.log("Виникла помилка під час оновлення імені.");
            error.innerText = 'Виникла помилка під час оновлення імені.';
            error.style.display = 'block';
            submitButton.removeAttribute("disabled");
            submitButton.style.backgroundColor = 'white';
        }
    })
}

function updateLastName(){
    document.getElementById('updateLastNameForm').addEventListener('submit',async (evt)=>{
        evt.preventDefault();

        const submitButton = document.getElementById('updateLastName');
        submitButton.setAttribute("disabled", "disabled");
        submitButton.style.backgroundColor = 'lightgray';

        const newLastName = document.getElementById('newLastName').value;

        const reqBody = new URLSearchParams({
            "newLastName": newLastName.trim()
        });

        const error = document.getElementById('error');
        try {
            const response = await fetch('http://localhost:8080/api/user/updateLastName',
                {
                    credentials: 'include',
                    method: 'PUT',
                    body: reqBody
                });

            if (response.ok){
                sessionStorage.removeItem("userData");
                await getUser();
            }

            const data = await response.json();
            const errorCode =  data.errorCode;
            error.innerText = '';

            switch (errorCode) {
                case 1:
                    error.innerText = 'Довжина прізвища немає перевищувати 25 символів.';
                    break;
                case 2:
                    error.innerText = 'Неправильне прізвище.'
                    break;
                case 3:
                    error.innerText = 'Введіть прізвище, що відрізняється від поточного.';
                    break;

            }
            error.style.display = 'block';
            submitButton.removeAttribute("disabled");
            submitButton.style.backgroundColor = 'white';
        }catch(err){
            console.log("Виникла помилка під час оновлення імені.");
            error.innerText = 'Виникла помилка під час оновлення прізвища.';
            error.style.display = 'block';
            submitButton.removeAttribute("disabled");
            submitButton.style.backgroundColor = 'white';
        }
    })
}

function deleteProfile(){
    document.getElementById('deleteProfile').addEventListener('click',async function () {
        this.setAttribute('disabled', 'disabled');
        this.style.backgroundColor = 'lightgray';
        const confirm = prompt("Введіть \"ПІДТВЕРДЖУЮ\", якщо Ви справді бажаєте видалити свій профіль!");
        const error = document.getElementById('error');

        if (confirm === 'ПІДТВЕРДЖУЮ') {
            try {
                const response = await fetch('http://localhost:8080/api/user/deleteProfile',
                    {
                        method: 'PUT',
                        credentials: 'include'
                    });

                if (response.ok) {
                    sessionStorage.setItem("isLoggedIn", JSON.stringify(false));
                    sessionStorage.removeItem("expiresAt");
                    sessionStorage.removeItem("userData");
                    window.location.href = '../index.html';
                    return;
                }
            } catch (err) {
                console.log("Виникла помилка під час оновлення імені.");
                error.innerText = 'Виникла помилка під час оновлення прізвища.';
                error.style.display = 'block';
                this.removeAttribute("disabled");
                this.style.backgroundColor = 'white';
            }
        }else{
            this.removeAttribute("disabled");
            this.style.backgroundColor = 'white';
            return;
        }
    });
}

function handleProfileUpdate() {
    updateFirstName();
    updateLastName();
    deleteProfile();
}

const ROLES = {
    USER: 1,
    REDACTOR: 2,
    ADMIN: 3
}

getUser();
showSettings();
handleProfileUpdate();