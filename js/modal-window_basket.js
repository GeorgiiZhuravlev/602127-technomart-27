// MODAL WINDOW FOR BASKET ALERT

// Windows
var modalBasketAlert = document.querySelector('#modal_basket-alert');

// Buttons
var btns_buy = document.querySelectorAll('.product-article_ui-btn._buy'),
		btn_basketClose = document.querySelector('#modal-basket-alert_close'),
		btn_basketContinue = document.querySelector('#modal-basket-alert_continue'),
		btn_basketOrder = document.querySelector('#modal-basket-alert_order');

// Opening
for (let i = 0; i < btns_buy.length; i++) {
	btns_buy[i].addEventListener('click', OpenModal);
}

function OpenModal(evt) {
	evt.stopPropagation();
	evt.preventDefault();
	modalBasketAlert.classList.remove('_vis-off');
	btn_basketOrder.focus();
}

// Closing
btn_basketClose.addEventListener('click', CloseModal);
btn_basketContinue.addEventListener('click', CloseModal);
modalBasketAlert.addEventListener('click', CloseModal);

function CloseModal(evt) {
	evt.stopPropagation();
	switch (evt.target.id) {
		case 'modal-basket-alert_close': modalBasketAlert.classList.add('_vis-off');; break;
		case 'modal-basket-alert_continue': modalBasketAlert.classList.add('_vis-off');; break;
		case 'modal_basket-alert': modalBasketAlert.classList.add('_vis-off');; break;
	}
}
