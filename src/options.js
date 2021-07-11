document.querySelector("form").addEventListener("submit", e => {
  chrome.storage.local.set({
    username: document.getElementById("username").value
  });
  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get("username", res => {
    if (res.username) {
      document.getElementById("username").value = res.username;
    }
  });
})
