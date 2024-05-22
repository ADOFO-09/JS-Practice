'use strict';

const modal = $(".modal");
const overlay = $(".overlay");
const btnCloseModal = $(".close-modal");
const btnOpenModal = $(".show-modal");

function openModal(){
    overlay.removeClass("hidden");
    modal.removeClass("hidden");
}

function closeModal(){
    modal.addClass("hidden");
    overlay.addClass("hidden");
}
btnOpenModal.click(function(){
    openModal();
});

btnCloseModal.click(function(){
   closeModal(); 
})

overlay.click(function(){
    closeModal();
})

$("body").keydown(function(e){
    // if(e.key === "Escape" || e.keyCode === 27){
    //     closeModal();
    // }
    if(e.key === "Escape" &&  !modal.hasClass("hidden")){
         closeModal();
    }
});