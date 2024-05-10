const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    const errorMessage = document.createElement("div");
    errorMessage.textContent = "All form fields must be filled in";
    form.appendChild(errorMessage);
    return;
  }

  const formData = { email, password };
  console.log(`Login: ${email}, Password: ${password}`);
  console.log(formData);
  form.reset();
}
