document.addEventListener("DOMContentLoaded", function () {
        const contactForm = document.getElementById("contact-form");
        const alertHTML = document.getElementById("alert-msg");
        const closeButton = alertHTML.querySelector(".btn-close");
    
        // JavaScript form validation
        contactForm.addEventListener("submit", function (event) {
          if (!contactForm.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            event.preventDefault(); // Prevent the form from submitting the default way
    
            const formData = new FormData(contactForm);
    
            fetch("https://formspree.io/f/mdknddlp", {
              method: "POST",
              headers: {
                Accept: "application/json",
              },
              body: formData,
            })
              .then((response) => response.json())
              .then((data) => {
                // Handle success
                alertHTML.innerHTML =
                  "<strong>Success!</strong> Your message has been sent successfully.";
                alertHTML.classList.remove("d-none");
                contactForm.reset(); // Optional: Reset the form fields
                contactForm.classList.remove("was-validated"); // Remove validation classes
              })
              .catch((error) => {
                // Handle error
                console.error("Error:", error);
                alertHTML.innerHTML =
                  "<strong>Error!</strong> There was a problem sending your message.";
                alertHTML.classList.remove("d-none");
              });
          }
          contactForm.classList.add("was-validated");
        });
      });
