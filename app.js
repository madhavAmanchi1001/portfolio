//Necessary buttons and variables
const contactInfo = document.querySelector(".contact-ul");
const contactNav = document.querySelector(".link-contact");
const aboutModal = document.querySelector(".about-modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-about-modal");
const aboutBtn = document.querySelector(".link-about");
const locationBtn = document.querySelector(".location-svg-button");
const skillsContainer = document.querySelector(".skills-sub-cont");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

// declared functions
const closeAboutFn = function () {
  aboutModal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const openAboutFn = function () {
  aboutModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//Event Listeners
//{contact button toggling between close and X}
contactNav.addEventListener("click", function () {
  contactInfo.classList.toggle("hidden");
  if (contactNav.innerHTML === "Contact") {
    contactNav.innerHTML = `<button class="close-about-modal-2">&times;</button>`;
  } else {
    contactNav.innerHTML = "Contact";
  }
});
//{X close button closing the modal}
aboutBtn.addEventListener("click", openAboutFn);
closeModal.addEventListener("click", closeAboutFn);
overlay.addEventListener("click", closeAboutFn);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !aboutModal.classList.contains("hidden")) {
    closeAboutFn();
  }
});
//{pointing to my house location in a new tab using window.open(, "blank")}
locationBtn.addEventListener("click", function () {
  const url =
    "https://www.google.com/maps/dir/14.6999133,77.5831264/14.69982,77.5832465/@14.6998304,77.583225,16z/data=!4m4!4m3!1m1!4e1!1m0?entry=ttu";
  window.open(url, "blank");
});
////{< > buttons functionality to scroll}
const cardWidth = 500; // Adjust this value according to your skill card width
const visibleCards = 3; // Number of cards visible at a time
let currentPosition = 0;

nextButton.addEventListener("click", function () {
  currentPosition += cardWidth * visibleCards;
  scrollTo(currentPosition);
});

prevButton.addEventListener("click", function () {
  currentPosition -= cardWidth * visibleCards;
  scrollTo(currentPosition);
});

function scrollTo(position) {
  // Ensure position does not exceed the maximum scroll width
  currentPosition = Math.min(
    position,
    skillsContainer.scrollWidth - skillsContainer.offsetWidth
  );
  // Ensure position is not less than 0
  currentPosition = Math.max(currentPosition, 0);
  skillsContainer.scrollTo({
    left: currentPosition,
    behavior: "smooth",
  });
}
