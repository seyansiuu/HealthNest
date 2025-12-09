
const bookBtn = document.getElementById("bookBtn");
if (bookBtn) {
    bookBtn.addEventListener("click", () => {
        bookBtn.innerText = "Processing...";
    });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const pass = document.getElementById("password").value;

        if (email === "" || pass === "") {
            alert("Please fill all fields");
        } else {
            alert("Logged in successfully!");
            loginForm.reset();
        }
    });
}
