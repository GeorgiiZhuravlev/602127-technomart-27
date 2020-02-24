// MODAL WINDOWS FOR INDEX.HTML

// Windows
var modalMap = document.querySelector('#modal_map'),
		modalFeedback = document.querySelector('#modal_feedback');

// Buttons
var btn_mapOpen = document.querySelector('#modal-map_open'),
		btn_feedbackOpen = document.querySelector('#modal-feedback_open'),
		btn_mapClose = document.querySelector('#modal-map_close'),
		btn_feedbackClose = document.querySelector('#modal-feedback_close');

// Opening
btn_mapOpen.addEventListener('click', OpenModal);
btn_feedbackOpen.addEventListener('click', OpenModal);

function OpenModal(evt) {
	evt.stopPropagation();
	if (evt.currentTarget.id) {
		switch (evt.currentTarget.id) {
			case 'modal-map_open': modalMap.classList.remove('_vis-off'); break;
			case 'modal-feedback_open':
				evt.preventDefault();
				modalFeedback.classList.remove('_vis-off');

				var user_name = document.querySelector('[name=user-name]'),
						user_email = document.querySelector('[name=user-email]'),
						user_text = document.querySelector('[name=user-text]'),
						btn_modalSubmit = document.querySelector('#modal-feedback_submit');

				if (!user_name.value) {
					user_name.focus();
				} else if (!user_email.value) {
					user_email.focus();
				} else if (!user_text.value) {
					user_text.focus();
				} else {
					btn_modalSubmit.focus();
				}; break;
		}
	} else if (evt.currentTarget.classList.contains('product-article_ui-btn')) {
		modal_basketAlert.classList.remove('_vis-off');
	}
}

// Closing
btn_mapClose.addEventListener('click', CloseModal);
modalMap.addEventListener('click', CloseModal);
btn_feedbackClose.addEventListener('click', CloseModal);
modalFeedback.addEventListener('click', CloseModal);

function CloseModal(evt) {
	evt.stopPropagation();
	switch (evt.target.id) {
		case 'modal_map': modalMap.classList.add('_vis-off'); break;
		case 'modal-map_close': modalMap.classList.add('_vis-off'); break;
		case 'modal_feedback': modalFeedback.classList.add('_vis-off'); break;
		case 'modal-feedback_close': modalFeedback.classList.add('_vis-off'); break;
	}
}