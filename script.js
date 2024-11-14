document.addEventListener("DOMContentLoaded", () => {
  const signinForm = document.getElementById("signin-form");
  const signupForm = document.getElementById("signup-form");
  const toggleBtn = document.getElementById("toggle-btn");
  const toggleHeading = document.getElementById("toggle-heading");
  const toggleDescription = document.getElementById("toggle-description");
  const formsContainer = document.getElementById("forms-container");

  toggleBtn.addEventListener("click", () => {
    signinForm.classList.toggle("active");
    signupForm.classList.toggle("active");
    formsContainer.classList.toggle("right-form");
    formsContainer.classList.toggle("left-form");

    // Update button text and description based on form state
    toggleHeading.textContent = signupForm.classList.contains("active")
      ? "Join Us!"
      : "Welcome Back!";
    toggleDescription.textContent = signupForm.classList.contains("active")
      ? "Already have an account? Sign in easily."
      : "Don’t have an account yet? Create one!";
    toggleBtn.textContent = signupForm.classList.contains("active")
      ? "Switch to Sign In"
      : "Switch to Sign Up";
  });
});
