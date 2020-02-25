// COUNT FUNCTION FOR CATALOG.HTML

// Buttons
var btnBuy = document.querySelectorAll('.product-article_ui-btn._buy'),
		btnBookmark = document.querySelectorAll('.product-article_ui-btn._bookmark');

// Links 
var linkBasket = document.querySelector('#header_basket'),
		linkBookmarks = document.querySelector('#header_bookmarks');

// Indicators
var indicBasket = document.querySelector('#header_basket-count'),
		indicBookmarks = document.querySelector('#header_bookmark-count');

// Set up "listeners"
for (let i = 0; i < btnBuy.length; i++) {
	btnBuy[i].addEventListener('click', BasketCount);
	btnBookmark[i].addEventListener('click', BookmarkCount); 
}

function BasketCount(evt) {
	evt.preventDefault();
	indicBasket.innerHTML = parseInt(indicBasket.innerHTML) + 1;
	if (indicBasket.innerHTML > 0) {
		linkBasket.classList.add('_active');
	}
}

function BookmarkCount(evt) {
	evt.preventDefault();
	indicBookmarks.innerHTML = parseInt(indicBookmarks.innerHTML) + 1;
	if (indicBookmarks.innerHTML > 0) {
		linkBookmarks.classList.add('_active');
	}
}