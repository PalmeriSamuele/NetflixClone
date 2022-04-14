window.onscroll = function() {
    if (document.documentElement.scrollTop > 30) {
        document.getElementById("change_color_header").style.background = "black";
    }
    else {
        if(document.documentElement.scrollTop < 10) {
            document.getElementById("change_color_header").style.background = "none";
        }
    }
}

/*
window.addEventListener('scroll', function(e) {
    console.log(window.scrollY)
    window.requestAnimationFrame(function() {
        if (window.scrollY >= 20) {
            if (document.getElementsByTagName("header") != undefined) {
                document.getElementsByTagName("header").style.backgroundColor = "black";
            }
        }
    });

});





/*
function headerChangeColor() {
    window.addEventListener('scroll', function(e) {
        console.log(window.scrollY)
        if (window.scrollY >= 20) {
            document.getElementsByTagName('header').style.backgroundColor = "black";
        }
    });
}
*/

