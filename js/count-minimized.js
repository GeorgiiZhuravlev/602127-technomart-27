var btnBuy=document.querySelectorAll(".product-article_ui-btn._buy"),btnBookmark=document.querySelectorAll(".product-article_ui-btn._bookmark"),linkBasket=document.querySelector("#header_basket"),linkBookmarks=document.querySelector("#header_bookmarks"),indicBasket=document.querySelector("#header_basket-count"),indicBookmarks=document.querySelector("#header_bookmark-count");for(let a=0;a<btnBuy.length;a++)btnBuy[a].addEventListener("click",BasketCount),btnBookmark[a].addEventListener("click",BookmarkCount);function BasketCount(a){a.preventDefault(),indicBasket.innerHTML=parseInt(indicBasket.innerHTML)+1,0<indicBasket.innerHTML&&linkBasket.classList.add("_active")}function BookmarkCount(a){a.preventDefault(),indicBookmarks.innerHTML=parseInt(indicBookmarks.innerHTML)+1,0<indicBookmarks.innerHTML&&linkBookmarks.classList.add("_active")}