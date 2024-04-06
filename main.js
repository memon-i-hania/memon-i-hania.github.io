function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Form submitted successfully!");

    var name = localStorage.setItem("name", name);
    var email = localStorage.setItem("email", email);
    var message = localStorage.setItem("message", message);
});
