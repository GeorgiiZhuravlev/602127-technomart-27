var modalMap=document.querySelector("#modal_map"),modalFeedback=document.querySelector("#modal_feedback"),btn_mapOpen=document.querySelector("#modal-map_open"),btn_feedbackOpen=document.querySelector("#modal-feedback_open"),btn_mapClose=document.querySelector("#modal-map_close"),btn_feedbackClose=document.querySelector("#modal-feedback_close");function OpenModal(e){if(e.stopPropagation(),e.currentTarget.id)switch(e.currentTarget.id){case"modal-map_open":e.preventDefault(),modalMap.classList.remove("_vis-off"),modalMap.classList.remove("_animation-close"),modalMap.classList.add("_animation-open"),btn_mapClose.focus();break;case"modal-feedback_open":e.preventDefault(),modalFeedback.classList.remove("_vis-off"),modalFeedback.classList.remove("_animation-close"),modalFeedback.classList.add("_animation-open");var a=document.querySelector("[name=user-name]"),o=document.querySelector("[name=user-email]"),t=document.querySelector("[name=user-text]"),c=document.querySelector("#modal-feedback_submit");a.value?o.value?t.value?c.focus():t.focus():o.focus():a.focus()}else e.currentTarget.classList.contains("product-article_ui-btn")&&modal_basketAlert.classList.remove("_vis-off")}function CloseModal(e){switch(e.stopPropagation(),e.target.id){case"modal_map":case"modal-map_close":setTimeout(function(){modalMap.classList.add("_vis-off")},250),modalMap.classList.remove("_animation-open"),modalMap.classList.add("_animation-close");break;case"modal_feedback":case"modal-feedback_close":setTimeout(function(){modalFeedback.classList.add("_vis-off")},250),modalFeedback.classList.remove("_animation-open"),modalFeedback.classList.add("_animation-close")}}btn_mapOpen.addEventListener("click",OpenModal),btn_feedbackOpen.addEventListener("click",OpenModal),btn_mapClose.addEventListener("click",CloseModal),modalMap.addEventListener("click",CloseModal),btn_feedbackClose.addEventListener("click",CloseModal),modalFeedback.addEventListener("click",CloseModal);