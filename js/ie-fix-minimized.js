var pattern1=/trident/gi,pattern2=/msie/gi;(pattern1.test(navigator.userAgent)||pattern2.test(navigator.userAgent))&&(FixStart(),FixMapPlace());function FixStart(){function a(){function a(a){a.stopPropagation(),a.currentTarget.style.boxShadow="0 10px 20px 0 rgba(0, 0, 0, 0.5)",a.currentTarget.querySelector(".product-article_img").style.opacity="0",a.currentTarget.querySelector(".product-article_ui").style.display="flex"}function b(a){a.stopPropagation(),a.currentTarget.style.boxShadow="none",a.currentTarget.querySelector(".product-article_img").style.opacity="1",a.currentTarget.querySelector(".product-article_ui").style.display="none"}var c=document.querySelectorAll(".product-article");for(let d=0;d<c.length;d++)c[d].addEventListener("mouseover",a),c[d].addEventListener("mouseout",b)}window.addEventListener("load",function(){const b=document.body,c=new MutationObserver(function(){a()});c.observe(b,{childList:!0,subtree:!0}),a()})}function FixMapPlace(){var a=document.querySelector(".modal-map.size-content");a.style.right="calc(50% - 470px)"}