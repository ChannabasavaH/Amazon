document.addEventListener("DOMContentLoaded", ()=>{
    const hambar = document.querySelector(".nav-all");
    const side_bar = document.querySelector(".side-bar");
    const xmark = document.querySelector(".fa-xmark");

    //function to toggle side-bar visibility
    function toggle_sidebar() {
        side_bar.classList.toggle("sidebar-visible");
    }
    
    hambar.addEventListener("click", toggle_sidebar);

    xmark.addEventListener("click", toggle_sidebar);
});