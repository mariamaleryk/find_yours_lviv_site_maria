async function updateLoginState() {
    let isLoggedIn = JSON.parse(sessionStorage.getItem("isLoggedIn"));
    const expiresAt = parseInt(sessionStorage.getItem("expiresAt"), 10) || 0;
    const currentTime = Date.now();

    if (isLoggedIn === null || (expiresAt <= currentTime && expiresAt !== 0)) {
        isLoggedIn = await isLogged();
    }

    const button = document.getElementById("login-btn");

    function handleClick() {
        if(isLoggedIn){
            if(!document.URL.includes("user-profile.html")){
                window.location.href = '../html/user-profile.html';
            }else{
                logout();
            }
        }else{
            if (!document.URL.includes('login.html')) {
                window.location.href = '../html/login.html';
            }
        }
    }

    button.removeEventListener('click', handleClick);
    button.addEventListener("click", handleClick);

    if (isLoggedIn) {
        if (!document.URL.includes("user-profile.html")) {
            button.innerText = 'Профіль';
        } else {
            button.innerText = 'Вийти';
        }
    } else {
        if (!document.URL.includes('login.html')) {
            button.innerText = 'Увійти';
        } else {
            button.remove();
            googleAuth();
            registerValidation();
            loginValidation();
        }
    }
}

async function isLogged() {
    try {
        const response = await fetch('http://localhost:8080/api/auth',
            {credentials: "include"});

        if(response.ok) {
            const data = await response.json();

            const expiresIn = data.expiresAt;
            const expiresAt = Date.now() + expiresIn;

            sessionStorage.setItem("isLoggedIn", JSON.stringify(true));
            sessionStorage.setItem("expiresAt", expiresAt);
            return true;
        }

        sessionStorage.setItem("isLoggedIn", JSON.stringify(false));
        sessionStorage.removeItem("expiresAt");
        return false;
    } catch (err) {
        sessionStorage.setItem("isLoggedIn", JSON.stringify(false));
        sessionStorage.removeItem("expiresAt");
        return false;
    }
}

async function logout() {
    try {
        const response = await fetch('http://localhost:8080/api/logout', { credentials: 'include' });
        if (response.ok) {
            sessionStorage.setItem("isLoggedIn", JSON.stringify(false));
            sessionStorage.removeItem("expiresAt");
            sessionStorage.removeItem("userData");
            window.location.href = '../index.html';
        }
    } catch (e) {
        console.log(e);
    }
}

updateLoginState();

function loginValidation() {
    document.getElementById("loginForm").addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const error= document.getElementById('error');
        error.style.display = 'none';
        error.innerText = '';

        const reqBody = new URLSearchParams({
            "email": email,
            "password": password
        });

        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                body: reqBody,
                credentials: "include",
            });

            if(response.ok) {
                window.location.href = 'user-profile.html';
            }

            if (response.status === 401) {
                error.innerText = 'Невірний логін або пароль.';
                error.style.display = 'block';
            }

        } catch (err) {
            console.error('Login error:', err);
            error.innerText = 'Виникла помилка під час обробки даних';
            error.style.display = 'block';
        }
    })
}

function registerValidation() {
    document.getElementById('registrationForm').addEventListener('submit', async function (event) {
        event.preventDefault();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const error = document.getElementById('registerError');

        error.style.display = 'none';
        error.innerText = '';

        if (password !== confirmPassword) {
            error.innerText = 'Паролі не збігаються.';
            error.style.display = 'block';
            event.preventDefault();
            return;
        }

        const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*;+\-.,])[a-zA-Z0-9!@#$%^&*;+\-.,]{8,}$/;
        if (!passwordRegex.test(password)) {
            error.innerText = 'Пароль повинен мати довжину не менше 8 символів, містити принаймні одну цифру та один спеціальний символ.';
            error.style.display = 'block';
            event.preventDefault();
            return;
        }

        const email = document.getElementById('registerEmail').value;
        const firstname = document.getElementById('firstName').value;
        const lastname = document.getElementById('lastName').value;

        const reqBody = new URLSearchParams({
            "email": email,
            "password": password,
            "firstName": firstname,
            "lastName": lastname
        });

        try {
            const response = await fetch('http://localhost:8080/api/register', {
                method: 'POST',
                body: reqBody,
                credentials: "include",
            });

            if(response.ok){
                window.location.href = 'login.html';
            }

            const data = await response.json();
            const errorCode =  data.errorCode;

            switch (errorCode) {
                case 1:
                    error.innerText = 'Неправильне ім\'я або прізвище.'
                    break;
                case 2:
                    error.innerText = 'Такий користувач уже існує.';
                    break;
                case 3:
                    error.innerText = 'Довжина імені та прізвища немає перевищувати 25 символів';
                    break;
            }
            error.style.display = 'block';
        } catch (err) {
            console.error('Register error:', err);
            error.innerText = 'Виникла помилка під час обробки даних';
            error.style.display = 'block';
        }
    });
}

function googleAuth(){
    const button = document.getElementById('googleLogin');
    button.addEventListener('click',()=>{
        window.location.assign('http://localhost:8080/api/auth/google');
    })
}