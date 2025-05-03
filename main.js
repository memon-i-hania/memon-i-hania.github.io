function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const data = new FormData(form);
  
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
  
      if (response.ok) {
        alert("Thank you! Your message has been sent.");
        form.reset();
      } else {
        alert("Oops! Something went wrong.");
      }
    });
  });

  ScrollReveal().reveal('.landing-content', {
    delay: 300,
    duration: 1000,
    origin: 'bottom',
    distance: '40px',
    easing: 'ease-in-out',
    reset: false
  });
  