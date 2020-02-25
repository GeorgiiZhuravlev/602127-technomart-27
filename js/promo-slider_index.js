// SCRIPT FOR PROMO SLIDER

// Buttons
var btnBW = document.querySelector('#promo-slider_bw'),
		btnFW = document.querySelector('#promo-slider_fw');

// Slides
var inputArr = document.querySelectorAll('.promo-slider_input'),
		slide1 = document.querySelector('#promo-slider_input1'),
		slide2 = document.querySelector('#promo-slider_input2');

btnBW.addEventListener('click', SliderControl);
btnFW.addEventListener('click', SliderControl);

// Slide control by side buttons
function SliderControl(evt) {
	var currentSlide;

	for (let i = 0; i < inputArr.length; i++) {
		if (inputArr[i].checked) {
			currentSlide = i;
		} else {
			continue;
		}
	}

	switch (evt.target.id) {
		case 'promo-slider_bw': 
			if (currentSlide !== 0) {
				currentSlide--;
				inputArr[currentSlide].checked = true;
			}; break;
		case 'promo-slider_fw': 
			if (currentSlide !== inputArr.length - 1) {
				currentSlide++;
				inputArr[currentSlide].checked = true;
			}; break;
	}
}
