const btn = document.getElementById("btnNotification");
const toastsContainer = document.querySelector(".toast-container");

const toastMessages = [
  "Apple",
  "I want to eat",
  "i like apple",
  "i Miss My friend",
  "I am Alexa",
];

btn.addEventListener("click", () => {
  createNotification();
});

function createNotification() {
  const Notification = document.createElement("div");
  Notification.classList.add("toast");
  Notification.innerText = getRandomMessage();
  toastsContainer.appendChild(Notification);
  console.log(Notification);

  setTimeout(() => {
    Notification.remove();
  }, 2000);
}

function getRandomMessage() {
  return toastMessages[Math.floor(Math.random() * toastMessages.length)];
}
