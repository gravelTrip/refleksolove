const btnGreen = document.querySelector('.specialization__article-btn--green');
const btnGold = document.querySelector('.specialization__article-btn--gold');
const btnDark = document.querySelector('.specialization__article-btn--dark');
const closeIcon = document.querySelector('.modal__icon');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__btn-close');


btnGreen.addEventListener('click', active);
btnGold.addEventListener('click', active);
btnDark.addEventListener('click', active);

closeIcon.addEventListener('click', inActive);
closeBtn.addEventListener('click', inActive);

function active() {
  modal.classList.add('active');
}

function inActive() {
  modal.classList.remove('active');
}