/**
 * Redirect to the university login page
 * when at the myed login page.
 */

let interval;

const redirect = () => {
  if (document.getElementById("root").childElementCount === 0) return;
  const login = document.getElementById("login-btn");
  if (login) login.click();
  else clearInterval(interval);
};

interval = setInterval(redirect, 500);
