const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

document.addEventListener('DOMContentLoaded', () => {
  const signUpForm = document.getElementById('sign-up-form');
  const signInForm = document.getElementById('sign-in-form');

  signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (username && email && password) {
      const user = {
        username: username,
        email: email,
        password: password,
      };

      localStorage.setItem(username, JSON.stringify(user));
      alert('Registration successful! Please sign in.');
    } else {
      alert('Please fill in all fields.');
    }
  });

  signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;

    const storedUser = localStorage.getItem(username);
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.password === password) {
        alert('Login successful!');
        window.location.href = 'Cabuyao Travel/Welcome.html'; // Redirect to welcome page
      } else {
        alert('Incorrect password.');
      }
    } else {
      alert('User not found.');
    }
  });
});


