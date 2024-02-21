const contactInfo = document.querySelector(".contact-ul");
const contactNav = document.querySelector(".link-contact");

contactNav.addEventListener("click", function () {
  contactInfo.classList.toggle("hidden");
  if (contactNav.innerHTML === "Contact") {
    contactNav.innerHTML = `<button class="close-about-modal-2">&times;</button>`;
  } else {
    contactNav.innerHTML = "Contact";
  }
});

const aboutModal = document.querySelector(".about-modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-about-modal");
const aboutBtn = document.querySelector(".link-about");

const closeAboutFn = function () {
  aboutModal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const openAboutFn = function () {
  aboutModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
aboutBtn.addEventListener("click", openAboutFn);
closeModal.addEventListener("click", closeAboutFn);
overlay.addEventListener("click", closeAboutFn);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !aboutModal.classList.contains("hidden")) {
    closeAboutFn();
  }
});
