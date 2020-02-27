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
			case 'modal-map_open':
				evt.preventDefault();
				modalMap.classList.remove('_vis-off');
				modalMap.classList.remove('_animation-close');
				modalMap.classList.add('_animation-open');
				btn_mapClose.focus(); break;
			case 'modal-feedback_open':
				evt.preventDefault();
				modalFeedback.classList.remove('_vis-off');
				modalFeedback.classList.remove('_animation-close');
				modalFeedback.classList.add('_animation-open');

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
		case 'modal_map': 
			setTimeout(function () { modalMap.classList.add('_vis-off'); }, 250);
			modalMap.classList.remove('_animation-open');
			modalMap.classList.add('_animation-close'); break;
		case 'modal-map_close':
			setTimeout(function () { modalMap.classList.add('_vis-off'); }, 250);
			modalMap.classList.remove('_animation-open');
			modalMap.classList.add('_animation-close'); break;
		case 'modal_feedback': 
			setTimeout(function () { modalFeedback.classList.add('_vis-off'); }, 250);
			modalFeedback.classList.remove('_animation-open');
			modalFeedback.classList.add('_animation-close'); break;
		case 'modal-feedback_close': 
			setTimeout(function () { modalFeedback.classList.add('_vis-off'); }, 250);
			modalFeedback.classList.remove('_animation-open');
			modalFeedback.classList.add('_animation-close'); break;
	}
}