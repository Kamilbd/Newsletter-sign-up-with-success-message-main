const eMail = document.querySelector('#email');
const sendBtn = document.querySelector('.send-btn');
const closePopupBtn = document.querySelector('.close-btn');
const popup = document.querySelector('.header__popup');
const shadowPopup = document.querySelector('.header__popup-shadow ');
const formBox = document.querySelector('.header__mail-box');

const clearError = () => {
	formBox.classList.remove('header__input-error');
};

const showError = () => {
	formBox.classList.add('header__input-error');
};
const checkMail = () => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	if (re.test(eMail.value)) {
		clearError();
		showPopup();
		console.log('działa');
	} else {
		showError();
		console.log('Nie działa');
	}
};
const showPopup = () => {
	popup.classList.add('header__show-popup');
	shadowPopup.classList.add('header__show-shadow');
};
const removePopup = () => {
	popup.classList.remove('header__show-popup');
	shadowPopup.classList.remove('header__show-shadow');
};
sendBtn.addEventListener('click', e => {
	e.preventDefault();
	checkMail(eMail);
});
closePopupBtn.addEventListener('click', removePopup);
