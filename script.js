$(document).ready(function(){
    $("#icon").click(function(){
        console.log("clicked")
        $(this).toggleClass("clicked");
        $(".nav-items").toggleClass("show");
    })
})