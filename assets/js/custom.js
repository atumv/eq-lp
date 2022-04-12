const mobileMenu = document.querySelector('.mobile-menu');
const menuBtn = document.querySelector('.menu-btn');
const signUpBtn = document.querySelectorAll('.signup-btn');
const signUpSubmitBtn = document.querySelectorAll('.contact-form-submit-btn');
const signUpModal = document.querySelector('.signup-modal');
const signUpSuccessModal = document.querySelector('.signup-success-modal');
const modalFade = document.querySelectorAll('.modal-fade');
const earlyAccessBtn = document.querySelector('.early-access-btn');
const viewAllNewsBtn = document.querySelector('.news-btn');

menuBtn.addEventListener('click', toggleMenu);
earlyAccessBtn.addEventListener('click', showSignUpSuccessModal);
viewAllNewsBtn.addEventListener('click', showSignUpSuccessModal);

signUpBtn.forEach((btn) => {
  btn.addEventListener('click', showSignUpModal);
});

signUpSubmitBtn.forEach((btn) =>
  btn.addEventListener('click', showSignUpSuccessModal)
);

modalFade.forEach((fade) => {
  fade.addEventListener('click', closeModal);
});

function toggleMenu() {
  mobileMenu.classList.toggle('d-none');
  document.body.classList.toggle('stop-scrolling');
}

function showSignUpModal() {
  signUpModal.classList.toggle('d-none');
}

function showSignUpSuccessModal(event) {
  event.preventDefault();
  if (!signUpModal.classList.contains('d-none')) {
    signUpModal.classList.add('d-none');
  }
  signUpSuccessModal.classList.toggle('d-none');
}

function closeModal() {
  if (!signUpModal.classList.contains('d-none')) {
    signUpModal.classList.toggle('d-none');
  } else if (!signUpSuccessModal.classList.contains('d-none')) {
    signUpSuccessModal.classList.toggle('d-none');
  }
}
