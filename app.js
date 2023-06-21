const modalBtn = document.querySelector(".modal-btn"); //selecting
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function(){ //listen for click events
modal.classList.add('open-modal') //click open modal
});

closeBtn.addEventListener("click", function(){
    modal.classList.remove('open-modal') //click close btn to remove .open modal frm modal overlay
});