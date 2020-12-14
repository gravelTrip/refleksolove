//Green modal
const btnGreen = document.querySelector('.specialization__article-btn--green');
const modalGreen = document.querySelector('.modal--green');
btnGreen.addEventListener('click', () => modalGreen.classList.add('active'));
const closeIconGreen = document.querySelector('.modal__icon--green');
const closeBtnGreen = document.querySelector('.modal__btn-close--green');
closeIconGreen.addEventListener('click', () => modalGreen.classList.remove('active'));
closeBtnGreen.addEventListener('click', () => modalGreen.classList.remove('active'));

//Gold modal
const btnGold = document.querySelector('.specialization__article-btn--gold');
const modalGold = document.querySelector('.modal--gold');
btnGold.addEventListener('click', () => modalGold.classList.add('active'));
const closeIconGold = document.querySelector('.modal__icon--gold');
const closeBtnGold = document.querySelector('.modal__btn-close--gold');
closeIconGold.addEventListener('click', () => modalGold.classList.remove('active'));
closeBtnGold.addEventListener('click', () => modalGold.classList.remove('active'));

//Gold dark
const btnDark = document.querySelector('.specialization__article-btn--dark');
const modalDark = document.querySelector('.modal--dark');
btnDark.addEventListener('click', () => modalDark.classList.add('active'));
const closeIconDark = document.querySelector('.modal__icon--dark');
const closeBtnDark = document.querySelector('.modal__btn-close--dark');
closeIconDark.addEventListener('click', () => modalDark.classList.remove('active'));
closeBtnDark.addEventListener('click', () => modalDark.classList.remove('active'));