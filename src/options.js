document.querySelector("form").addEventListener("submit", e => {
  browser.storage.local.set({
    username: document.getElementById("username").value
  });
  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", () => {
  const username = browser.storage.local.get("username");
  username.then(res => {
    if (res.username) {
      document.getElementById("username").value = res.username;
    }
  });
})
