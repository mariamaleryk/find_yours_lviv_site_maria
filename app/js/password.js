// Перевірка паролів для реєстрації
document.getElementById("password").addEventListener("input", function () {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var messageBox = document.getElementById("message");
    var confirmMessage = document.getElementById("confirmMessage");
    var isValid = true;

    // Показуємо повідомлення про валідність пароля
    messageBox.style.display = "block";

    // Перевірка довжини пароля (мінімум 8 символів)
    var lengthCheck = document.getElementById("length");
    if (password.length >= 8) {
        lengthCheck.classList.remove("invalid");
        lengthCheck.classList.add("valid");
    } else {
        lengthCheck.classList.remove("valid");
        lengthCheck.classList.add("invalid");
        isValid = false;
    }

    // Перевірка на наявність малих літер
    var lowerCaseLetters = /[a-z]/g;
    var letterCheck = document.getElementById("letter");
    if (password.match(lowerCaseLetters)) {
        letterCheck.classList.remove("invalid");
        letterCheck.classList.add("valid");
    } else {
        letterCheck.classList.remove("valid");
        letterCheck.classList.add("invalid");
        isValid = false;
    }

    // Перевірка на наявність великих літер
    var upperCaseLetters = /[A-Z]/g;
    var capitalCheck = document.getElementById("capital");
    if (password.match(upperCaseLetters)) {
        capitalCheck.classList.remove("invalid");
        capitalCheck.classList.add("valid");
    } else {
        capitalCheck.classList.remove("valid");
        capitalCheck.classList.add("invalid");
        isValid = false;
    }

    // Перевірка співпадання паролів
    if (password === confirmPassword && password !== "") {
        confirmMessage.textContent = "Паролі співпадають!";
        confirmMessage.classList.remove("error");
        confirmMessage.classList.add("valid");
    } else {
        confirmMessage.textContent = "Паролі не співпадають!";
        confirmMessage.classList.remove("valid");
        confirmMessage.classList.add("error");
        isValid = false;
    }

    return isValid;
});

// Перевірка паролів і підтвердження при сабміті форми реєстрації
document.getElementById("registrationForm").addEventListener("submit", function (event) {

    event.preventDefault(); // Запобігаємо перезавантаженню сторінки
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var isValid = true;

    var confirmMessage = document.getElementById("confirmMessage");
    confirmMessage.textContent = ""; // Спочатку очищаємо повідомлення про помилки
    confirmMessage.classList.remove("error", "valid");

    // Перевірка пароля на відповідність умовам
    if (password.length < 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
        alert("Будь ласка, виправте помилки у паролі");
        isValid = false;
    }

    // Перевірка співпадання паролів
    if (password !== confirmPassword) {
        confirmMessage.textContent = "Паролі не співпадають!";
        confirmMessage.classList.add("error");
        confirmMessage.classList.remove("valid");
        isValid = false;
    } else {
        confirmMessage.textContent = "Паролі співпадають!";
        confirmMessage.classList.add("valid");
        confirmMessage.classList.remove("error");
    }

    // Якщо є помилки, не відправляти форму і дозволити виправити їх
    if (!isValid) {
        return false;
    }

    // Якщо все правильно, виводимо успішне повідомлення (можна замінити на реальну відправку форми)
    alert("Реєстрація успішна!");
});



// Відкривати / закривати пароль
document.getElementById("togglePassword").addEventListener("click", function () {
    var passwordField = document.getElementById("password");
    var type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;
    // Міняємо іконку
    this.classList.toggle("bi-eye-slash");
    this.classList.toggle("bi-eye");
});

document.getElementById("toggleConfirmPassword").addEventListener("click", function () {
    var confirmPasswordField = document.getElementById("confirmPassword");
    var type = confirmPasswordField.type === "password" ? "text" : "password";
    confirmPasswordField.type = type;
    // Міняємо іконку
    this.classList.toggle("bi-eye-slash");
    this.classList.toggle("bi-eye");
});

document.getElementById("toggleLoginPassword").addEventListener("click", function () {
    var loginPasswordField = document.getElementById("loginPassword");
    var type = loginPasswordField.type === "password" ? "text" : "password";
    loginPasswordField.type = type;
    // Міняємо іконку
    this.classList.toggle("bi-eye-slash");
    this.classList.toggle("bi-eye");
});


