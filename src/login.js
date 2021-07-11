/**
 * Automatically enters the username
 * when at the university username entry page.
 * Configure the username to be entered in the options.
 */

if (location.pathname === "/cosign.cgi") {
  chrome.storage.local.get("username", res => {
    if (res.username) {
      document.getElementById("login").value = res.username;
      document.getElementById("submit").click();
    }
  });
}

/**
 * Automatically submits the login form
 * when at the university login page.
 * Enable the automatic password filling feature of your browser or password manager.
 */

if (location.pathname === "/login/") {
  setTimeout(() => document.getElementById("submit").click(), 300);
}
