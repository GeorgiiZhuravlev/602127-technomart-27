var pattern1=/trident/gi,pattern2=/msie/gi;(pattern1.test(navigator.userAgent)||pattern2.test(navigator.userAgent))&&FixMapPlace();function FixMapPlace(){var a=document.querySelector(".modal-map.size-content");a.style.right="calc(50% - 470px)"}try{var modalMap=document.querySelector("#modal_map");if(!modalMap)throw new ReferenceError("\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u043A\u043D\u043E \u043A\u0430\u0440\u0442\u044B");ModalMap()}catch(a){console.log(a.message)}try{var modalFeedback=document.querySelector("#modal_feedback");if(!modalFeedback)throw new ReferenceError("\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u043A\u043D\u043E \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438");var userName=document.querySelector("#modal_feedback [name=user-name]"),userEmail=document.querySelector("#modal_feedback [name=user-email]"),userText=document.querySelector("#modal_feedback [name=user-text]"),btn_feedbackOpen=document.querySelector("#modal-feedback_open"),btn_feedbackClose=document.querySelector("#modal-feedback_close");ModalFeedback(),SaveUserData(),ObservingFeedback()}catch(a){console.log(a.message)}try{var productArticle=document.querySelector(".product-article");if(!productArticle)throw new ReferenceError("\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u0442\u043E\u0432\u0430\u0440\u0430");ModalBasket(),Counting()}catch(a){console.log(a.message)}function ModalMap(){function a(a){a.stopPropagation(),("modal_map"===a.target.id||"modal-map_close"===a.target.id)&&(setTimeout(function(){modalMap.classList.add("_vis-off")},250),modalMap.classList.remove("_animation-open"),modalMap.classList.add("_animation-close"))}var b=document.querySelector("#modal-map_open"),c=document.querySelector("#modal-map_close");b.addEventListener("click",function(a){a.stopPropagation(),a.preventDefault(),modalMap.classList.remove("_vis-off"),modalMap.classList.remove("_animation-close"),modalMap.classList.add("_animation-open"),c.focus()}),c.addEventListener("mousedown",a),modalMap.addEventListener("mousedown",a)}function ModalFeedback(){function a(a){a.stopPropagation(),("modal_feedback"===a.target.id||"modal-feedback_close"===a.target.id)&&(setTimeout(function(){modalFeedback.classList.add("_vis-off")},250),modalFeedback.classList.remove("_animation-open"),modalFeedback.classList.add("_animation-close"))}var b=document.querySelector("#modal-feedback_open"),c=document.querySelector("#modal-map_close");b.addEventListener("click",function(a){a.stopPropagation(),a.preventDefault(),modalFeedback.classList.remove("_vis-off"),modalFeedback.classList.remove("_animation-close"),modalFeedback.classList.add("_animation-open");var b=document.querySelector("#modal_feedback [name=user-name]"),c=document.querySelector("#modal_feedback [name=user-email]"),d=document.querySelector("#modal_feedback [name=user-text]"),e=document.querySelector("#modal-feedback_submit");b.value?c.value?d.value?e.focus():d.focus():c.focus():b.focus()}),btn_feedbackClose.addEventListener("mousedown",a),modalFeedback.addEventListener("mousedown",a)}function ModalBasket(){function a(a){a.stopPropagation(),a.preventDefault(),c.classList.remove("_vis-off"),c.classList.remove("_animation-close"),c.classList.add("_animation-open"),g.focus()}function b(a){a.stopPropagation(),("modal-basket-alert_close"===a.target.id||"modal-basket-alert_continue"===a.target.id||"modal_basket-alert"===a.target.id)&&(setTimeout(function(){c.classList.add("_vis-off")},250),c.classList.remove("_animation-open"),c.classList.add("_animation-close"))}var c=document.querySelector("#modal_basket-alert"),d=document.querySelectorAll(".product-article_ui-btn._buy"),e=document.querySelector("#modal-basket-alert_close"),f=document.querySelector("#modal-basket-alert_continue"),g=document.querySelector("#modal-basket-alert_order");for(let b=0;b<d.length;b++)d[b].addEventListener("click",a);c.addEventListener("mousedown",b),e.addEventListener("mousedown",b),f.addEventListener("mousedown",b)}function Counting(){var a=document.querySelectorAll(".product-article_ui-btn._buy"),b=document.querySelectorAll(".product-article_ui-btn._bookmark"),c=document.querySelector("#header_basket"),d=document.querySelector("#header_bookmarks"),e=document.querySelector("#header_basket-count"),f=document.querySelector("#header_bookmark-count");for(let g=0;g<a.length;g++)a[g].addEventListener("click",function(a){a.preventDefault(),e.innerHTML=parseInt(e.innerHTML)+1,0<e.innerHTML&&c.classList.add("_active")}),b[g].addEventListener("click",function(a){a.preventDefault(),f.innerHTML=parseInt(f.innerHTML)+1,0<f.innerHTML&&d.classList.add("_active")})}function SaveUserData(){GetUserData(userName,userEmail,userText),userName.addEventListener("blur",function(){userName.value&&(localStorage.setItem("user-name",userName.value),SaveUserData())}),userEmail.addEventListener("blur",function(){userEmail.value&&(localStorage.setItem("user-email",userEmail.value),SaveUserData())}),userText.addEventListener("blur",function(){userText.value&&(localStorage.setItem("user-text",userText.value),SaveUserData())})}function GetUserData(){localStorage.getItem("user-name")&&localStorage.getItem("user-name")!==userName.value&&(userName.value=localStorage.getItem("user-name")),localStorage.getItem("user-email")&&localStorage.getItem("user-email")!==userEmail.value&&(userEmail.value=localStorage.getItem("user-email")),localStorage.getItem("user-text")&&localStorage.getItem("user-text")!==userText.value&&(userText.value=localStorage.getItem("user-text"))}function ObservingFeedback(){const a=new MutationObserver(function(){if(modal_feedback.classList.contains("_vis-off")){if(userName.value||userEmail.value||userText.value)var a=window.confirm("\u0425\u043E\u0442\u0438\u0442\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0432 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u043C \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435?");a||(localStorage.clear(),userName.value="",userEmail.value="",userText.value="")}});a.observe(modal_feedback,{attributeFilter:["class"]})}try{var promoSlider=document.querySelector(".promo-slider");if(!promoSlider)throw new ReferenceError("\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043F\u0440\u043E\u043C\u043E-\u0441\u043B\u0430\u0439\u0434\u0435\u0440");var btn_BW=document.querySelector("#promo-slider_bw"),btn_FW=document.querySelector("#promo-slider_fw"),inputArr=document.querySelectorAll(".promo-slider_input"),slide1=document.querySelector("#promo-slider_input1"),slide2=document.querySelector("#promo-slider_input2");btn_BW.addEventListener("click",SliderControl),btn_FW.addEventListener("click",SliderControl)}catch(a){console.log(a.message)}function SliderControl(a){var b;for(let c=0;c<inputArr.length;c++)if(inputArr[c].checked)b=c;else continue;switch(a.target.id){case"promo-slider_bw":0!==b&&(b--,inputArr[b].checked=!0);;break;case"promo-slider_fw":b!==inputArr.length-1&&(b++,inputArr[b].checked=!0);;}}