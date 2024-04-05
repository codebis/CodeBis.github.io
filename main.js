window.onload = function() {
    var logged = getCookie("logged");
    if (logged === "1") {
        window.location.href = "doc.html";
    }
};

function login() {
    var username = document.getElementById("username").value.toLowerCase();
    var password = document.getElementById("password").value;

    if (username === "user485021" && password === "8#Tm$!Bp@6Xq2ZnY") {
        setCookie("logged", "1", 1);
        window.location.href = "doc.html";
        return false;
    } else {
        document.getElementById("error-message").innerHTML = "Credenziali non valide. Riprova.";
        return false;
    }
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}