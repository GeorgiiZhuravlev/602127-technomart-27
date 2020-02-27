// Фикс неработающего "ховера" на блочных элементах для IE

// Устанавливаем паттерны для определения движка IE.
var pattern1 = /trident/gi,
		pattern2 = /msie/gi;

// Определяем браузер IE. Если истина - запускаем скрипт "FixStart".
// "FixMapPlace" - описан ниже.
if (pattern1.test(navigator.userAgent) || pattern2.test(navigator.userAgent)) {
 	FixStart();
 	FixMapPlace();
}

// Определяем скрипт.
function FixStart() {
	// При добавлении элементов на веб-страницу, скрипт может сломаться.
	// Для этого установим наблюдение за состоянием изменения страницы и перезагрузим скрипт если изменения были найдены.
	// Но для оптимизации, первый его запуск будет после полной загрузки страницы.
	window.addEventListener('load', Observing);

	function Observing() {
		const	target = document.body;
		const	config = { childList: true, subtree: true };
		const	callback = function() {	HoverFix();	};
		const	observer = new MutationObserver(callback);

		observer.observe(target, config);
		HoverFix();
	}

	function HoverFix() {
		// Находим багующий элемент.
		var	article = document.querySelectorAll('.product-article');

		// Вешаем на него "прослушку".
		for (let i = 0; i < article.length; i++) {
			article[i].addEventListener('mouseover', Hover);
			article[i].addEventListener('mouseout', Unhover);
		}

		// Функция "hover".
		function Hover(evt) {
			evt.stopPropagation();
			evt.currentTarget.style.boxShadow = '0 10px 20px 0 rgba(0, 0, 0, 0.5)';
			evt.currentTarget.querySelector('.product-article_img').style.opacity = '0';
			evt.currentTarget.querySelector('.product-article_ui').style.display = 'flex';
		}

		// Функция "unhover".
		function Unhover(evt) {
			evt.stopPropagation();
			evt.currentTarget.style.boxShadow = 'none';
			evt.currentTarget.querySelector('.product-article_img').style.opacity = '1';
			evt.currentTarget.querySelector('.product-article_ui').style.display = 'none';
		}
	}
}

// Фикс расположения окна карты

function FixMapPlace() {
	var modalMapWindow = document.querySelector('.modal-map.size-content');
	modalMapWindow.style.right = 'calc(50% - 470px)';
}