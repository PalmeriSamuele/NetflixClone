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



var films_items = document.getElementById("films_slider").children;
console.log(films_items);

for(var i=7;i< films_items.length;i++) {
    films_items[i].style.display = "none"
}

function sliderFilms(){
    for(var i=0;i< films_items.length;i++) {
        films_items[i].style.left = "200px"
        if (i>=8) {
            films_items[i].style.display = "block"
        }
    }
}



