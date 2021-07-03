/**
 * Redirect to the university login page
 * when at the myed login page.
 */

let interval;

const redirect = () => {
  if (document.getElementById("root").childElementCount === 0) return;
  const login = document.getElementById("login-btn");
  if (login) location.href = "https://www.ease.ed.ac.uk/cosign.cgi?cosign-eucsCosign-www.myed.ed.ac.uk&https://www.myed.ed.ac.uk/uPortal/Login?refUrl=%2Fmyed-progressive%2F";
  clearInterval(interval);
};

interval = setInterval(redirect, 500);
