const registerForm = document.querySelector(".login-form");
const formData = {};
registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  formData["email"] = form.elements.email.value;
  formData["password"] = form.elements.password.value;
  console.log(`Login: ${email}, Password: ${password}`);
  console.log(formData);
  form.reset();
}
