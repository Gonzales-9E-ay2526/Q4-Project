function logIn(event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let stayLoggedIn = document.getElementById("stayLoggedIn");

    if (username === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    switch (username) {
        case "Student2526":
            if (password === "Ms.Pascobest") {
                alert("Login successful!");

                if (stayLoggedIn.checked) {
                    console.log("User chose to stay logged in.");
                }

                window.location.href = "dashboard.html";
            } else {
                alert("Incorrect username or password.");
            }
            break;

        default:
            alert("Username not found.");
    }
}
