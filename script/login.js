var btnLogin = document.getElementById("btn-login");

window.onload = function() {
    var userLoggedIn = localStorage.getItem("userLoggedIn");
    if(userLoggedIn != null) {
        userLoggedIn = JSON.parse(userLoggedIn);
        alert("You are already logged in as " + userLoggedIn.username + ". Redirecting to homepage...");
        window.location.href = "/";
    }
}

btnLogin.addEventListener("click", function() {
    var userName = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var users = localStorage.getItem("users");
    if(users == null) {
        alert("Username or Password is incorrect.");
        return;
    }

    var objectUsers = JSON.parse(users);
    for(var i = 0 ; i < objectUsers.length; i++) {
        var objUsername = objectUsers[i].username;
        var objPassword = objectUsers[i].password; 
        if(objUsername == userName && objPassword == password) {
            alert("Login success!")
            var userLoggedIn = objectUsers[i];
            localStorage.setItem("userLoggedIn", JSON.stringify(userLoggedIn));
            window.location.href = "/";
            return;
        }
    }

    alert("Username or Password is incorrect.");
})