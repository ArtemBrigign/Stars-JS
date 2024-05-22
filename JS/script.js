$(document).ready(function(){
    function createStar() {
        var star = $("<div/>", {
            class: "star",
            css: {
                left: Math.random() * window.innerWidth,
                top: Math.random() * window.innerHeight,
                opacity: Math.random()
            }
        });
        $("body").append(star);
        star.fadeOut(2000, function() {
            $(this).remove();
        });
    }

    setInterval(function(){
        createStar();
    }, 200);

});