$(function() {
    //show slider
    $(".main-image img").click(function(){
        $(".show").css({display: "flex"});
    });
    //hide slider
    $(".close-shower").click(function(){
        $(".show").css({display: "none"});
    });
    // gothrough images
    $(".thumb-nail img").click(function(){
            $(".thumb-nail img").removeClass("active");
            $(this).addClass("active");
            $(".main-image img").attr("src", `images/image-product-${this.dataset.num}.jpg`);
    });
    //go through images by clickinh on left and right arrow
    //show and hide navigation
    $(".toggle").click(function() {
        $("nav").css({display: "block"});
        $(".close-menu").css({display: "block"});
    });
    $(".close-menu").click(function(){
        $(".toggle").css({display: "block"});
        $("nav").css({display: "none"});
    });
});