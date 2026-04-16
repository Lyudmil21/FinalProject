export function setupForm() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");
        const messageError = document.getElementById("message-error");

        let valid = true;

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        if (name.value.trim().length < 2) {
            nameError.textContent = "Name must be at least 2 characters long.";
            valid = false;
        }

        if (!regex.test(email.value.trim())) {
            emailError.textContent = "Please enter a valid email address.";
            valid = false;
        }

        if (message.value.trim().length < 10) {
            messageError.textContent = "Message must be at least 10 characters long.";
            valid = false;
        }

        if (!valid) return;

        alert("Message sent successfully!");
        form.reset();
    });
}