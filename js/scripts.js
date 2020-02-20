// MODAL WINDOWS

var modalMap = document.getElementById('modal_map'),
		modalFeedback = document.getElementById('modal_feedback'),
		modalBasketAlert = document.getElementById('modal_basket-alert'),
		btn_AddToBasket = document.querySelectorAll('.product-article_ui-btn._buy');

for (let i = 0; i < btn_AddToBasket.length; i++) {
	btn_AddToBasket[i].addEventListener('click', OpenBasketAlert);
}

function OpenMap() {
	document.querySelector('#modal_map .btn-cross._modal').focus();
	modalMap.classList.remove('visually-hidden');
}

function CloseMap() {
	modalMap.classList.add('visually-hidden');
}

function OpenFeedback() {
	document.querySelector('#modal-feedback-username').focus();
	modalFeedback.classList.remove('visually-hidden');
}

function CloseFeedback() {
	modalFeedback.classList.add('visually-hidden');
}

function OpenBasketAlert() {
	document.querySelector('#modal_basket-alert .btn-standart._red._modal').focus();
	modalBasketAlert.classList.remove('visually-hidden');
}

function CloseBasketAlert() {
	modalBasketAlert.classList.add('visually-hidden');
}