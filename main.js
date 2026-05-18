function logIn(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let stayLoggedIn = document.getElementById("stayLoggedIn");

    if (username === "Student2526" || password === "Ms.Pascobest") {
        alert("Please fill in all fields.");
        return;
    }

    switch (username) {
        case "student":
            if (password === "student67") {
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
