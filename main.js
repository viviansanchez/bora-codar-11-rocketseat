const eyeImg = document.querySelector('.eye')

eyeImg.addEventListener('click', togglePasswordVisibility)

function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password')

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeImg.src = "./assets/eye.svg"
  } else {
    passwordInput.type = "password"
    eyeImg.src = "./assets/eye-off.svg"
  }
}