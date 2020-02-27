// SAVE FORM DATA IN LOCAL STORAGE

try {
	var modalFeedback = document.querySelector('#modal_feedback');

	if (!modal_feedback) {
		throw new ReferenceError('Отсуствует форма обратной связи');
	}

	var userName = document.querySelector('#modal_feedback [name=user-name]'),
			userEmail = document.querySelector('#modal_feedback [name=user-email]'),
			userText = document.querySelector('#modal_feedback [name=user-text]');

	SaveUserData();
} catch (err) {
	console.log(err.message);
}

function SaveUserData() {
	GetUserData(userName, userEmail, userText);

	userName.addEventListener('blur', function () {
		if (userName.value) {
			localStorage.setItem('user-name', userName.value);
			SaveUserData();
		}
	})

	userEmail.addEventListener('blur', function () {
		if (userEmail.value) {
			localStorage.setItem('user-email', userEmail.value);
			SaveUserData();
		}
	})

	userText.addEventListener('blur', function () {
		if (userText.value) {
			localStorage.setItem('user-text', userText.value);
			SaveUserData();
		}
	})
}

function GetUserData() {
	if (localStorage.getItem('user-name') && localStorage.getItem('user-name') !== userName.value) {
		userName.value = localStorage.getItem('user-name');
	}

	if (localStorage.getItem('user-email') && localStorage.getItem('user-email') !== userEmail.value) {
		userEmail.value = localStorage.getItem('user-email');
	}

	if (localStorage.getItem('user-text') && localStorage.getItem('user-text') !== userText.value) {
		userText.value = localStorage.getItem('user-text');
	}
}

window.addEventListener('load', Observing);

function Observing() {
	const	config = { attributeFilter: ['class'] };
	const	callback = function() {	
			if (modal_feedback.classList.contains('_vis-off')) {
				if (userName.value || userEmail.value || userText.value)
				var confirm = window.confirm('Хотите сохранить введенные данные в локальном хранилище?');
				if (!confirm) {
					localStorage.clear();
					userName.value = '';
					userEmail.value = '';
					userText.value = '';
				}
			}
		};
	const	observer = new MutationObserver(callback);

	observer.observe(modal_feedback, config);
}