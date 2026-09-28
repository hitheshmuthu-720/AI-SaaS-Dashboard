// Sign Up

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("signupName").value;
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const user = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem("aihubUser", JSON.stringify(user));

        alert("Account created successfully!");

        window.location.href = "login.html";

    });

}


// Login

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        const savedUser = JSON.parse(
            localStorage.getItem("aihubUser")
        );

        if (
            savedUser &&
            email === savedUser.email &&
            password === savedUser.password
        ) {

            localStorage.setItem("isLoggedIn", "true");

            alert("Login successful!");

            window.location.href = "dashboard.html";

        } else {

            alert("Invalid email or password!");

        }

    });

}


// Forgot Password

const forgotForm = document.getElementById("forgotForm");

if (forgotForm) {

    forgotForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("forgotEmail").value;

        const savedUser = JSON.parse(
            localStorage.getItem("aihubUser")
        );

        if (savedUser && email === savedUser.email) {

            alert("Password reset link sent to your email!");

        } else {

            alert("Email not found!");

        }

    });

}
// Protect Dashboard

if (window.location.pathname.includes("dashboard.html")) {

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {

        window.location.href = "login.html";

    }

}
// Display User Name

const dashboardUser = document.getElementById("dashboardUser");

if (dashboardUser) {

    const savedUser = JSON.parse(
        localStorage.getItem("aihubUser")
    );

    if (savedUser) {
        dashboardUser.textContent = savedUser.name;
    }

}
// Logout

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function() {

        localStorage.removeItem("isLoggedIn");

        window.location.href = "login.html";

    });

}
// Profile Information

const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");

const profileNameInput =
    document.getElementById("profileNameInput");

const profileEmailInput =
    document.getElementById("profileEmailInput");


if (profileName || profileEmail) {

    const savedUser = JSON.parse(
        localStorage.getItem("aihubUser")
    );

    if (savedUser) {

        profileName.textContent = savedUser.name;

        profileEmail.textContent = savedUser.email;

        profileNameInput.value = savedUser.name;

        profileEmailInput.value = savedUser.email;

    }

}
// Update Profile

const profileForm = document.getElementById("profileForm");

if (profileForm) {

    profileForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("profileNameInput").value;

        const email =
            document.getElementById("profileEmailInput").value;

        const savedUser = JSON.parse(
            localStorage.getItem("aihubUser")
        );

        if (savedUser) {

            savedUser.name = name;
            savedUser.email = email;

            localStorage.setItem(
                "aihubUser",
                JSON.stringify(savedUser)
            );

            document.getElementById("profileName").textContent = name;

            document.getElementById("profileEmail").textContent = email;

            alert("Profile updated successfully!");

        }

    });

}
// Change Password

const passwordForm = document.getElementById("passwordForm");

if (passwordForm) {

    passwordForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const currentPassword =
            document.getElementById("currentPassword").value;

        const newPassword =
            document.getElementById("newPassword").value;

        const confirmNewPassword =
            document.getElementById("confirmNewPassword").value;

        const savedUser = JSON.parse(
            localStorage.getItem("aihubUser")
        );


        if (!savedUser) {
            alert("User account not found!");
            return;
        }


        if (currentPassword !== savedUser.password) {
            alert("Current password is incorrect!");
            return;
        }


        if (newPassword !== confirmNewPassword) {
            alert("New passwords do not match!");
            return;
        }


        savedUser.password = newPassword;

        localStorage.setItem(
            "aihubUser",
            JSON.stringify(savedUser)
        );


        alert("Password changed successfully!");

        passwordForm.reset();

    });

}
// Dashboard Statistics

const generationCount =
    document.getElementById("generationCount");

const historyCount =
    document.getElementById("historyCount");

if (generationCount || historyCount) {

    const history =
        JSON.parse(
            localStorage.getItem("aihubHistory")
        ) || [];

    if (generationCount) {
        generationCount.textContent = history.length;
    }

    if (historyCount) {
        historyCount.textContent = history.length;
    }

}