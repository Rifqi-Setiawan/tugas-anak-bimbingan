function getValue(item) {
    var namaPanjang = document.getElementById(item);
    if (namaPanjang) {
        return namaPanjang.value;
    }
    else {
        throw new Error("Element with id ".concat(item, " not found"));
    }
}
function getById(id) {
    return document.getElementById(id);
}
// algoritma signup start
function signUp() {
    var tabAkun = JSON.parse(localStorage.getItem('tabAkun') || '[]');
    var warningFullName = document.getElementById("warningFullName");
    var warningEmail = document.getElementById("warningEmail");
    var warningPassword = document.getElementById("warningPassword");
    var resultFullName = getById("fullName");
    var fullName = getValue("fullName");
    if (!fullName) {
        warningFullName === null || warningFullName === void 0 ? void 0 : warningFullName.classList.remove("hidden");
    }
    else {
        warningFullName === null || warningFullName === void 0 ? void 0 : warningFullName.classList.add("hidden");
    }
    var email = getValue("email");
    var resultEmail = getById("email");
    if (!email) {
        warningEmail === null || warningEmail === void 0 ? void 0 : warningEmail.classList.remove("hidden");
    }
    else {
        warningEmail === null || warningEmail === void 0 ? void 0 : warningEmail.classList.add("hidden");
    }
    var password = getValue("password");
    var resultPassword = getById("password");
    if (!password) {
        warningPassword === null || warningPassword === void 0 ? void 0 : warningPassword.classList.remove("hidden");
    }
    else {
        warningPassword === null || warningPassword === void 0 ? void 0 : warningPassword.classList.add("hidden");
    }
    if (password && email && fullName) {
        var newAkun = {
            fullName: fullName,
            email: email,
            password: password,
        };
        tabAkun.push(newAkun);
        localStorage.setItem("tabAkun", JSON.stringify(tabAkun));
        window.location.replace("index.html");
    }
}
// algoritma signup end
// algoritma login start
function loginAkun() {
    var verifikasi = false;
    var urutan = -1;
    var storedTabAkun = localStorage.getItem("tabAkun");
    var tabAkun = JSON.parse(localStorage.getItem('tabAkun') || '[]');
    var loginWarningPassword = getById("loginWarningPassword");
    var loginWarningEmail = getById("loginWarningEmail");
    var passwordLogin = getValue("passwordLogin");
    var emailLogin = getValue("emailLogin");
    if (storedTabAkun) {
        tabAkun = JSON.parse(storedTabAkun);
    }
    for (var i = 0; i < tabAkun.length; i++) {
        if (tabAkun[i].email === emailLogin && tabAkun[i].password === passwordLogin) {
            verifikasi = true;
            localStorage.setItem('uname', tabAkun[i].fullName);
            window.location.href = "page2.html";
        }
    }
    if (!verifikasi) {
        loginWarningPassword === null || loginWarningPassword === void 0 ? void 0 : loginWarningPassword.classList.remove('hidden');
    }
    else {
        loginWarningPassword === null || loginWarningPassword === void 0 ? void 0 : loginWarningPassword.classList.add('hidden');
    }
}
