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
var films_items2 = document.getElementById("films_slider2").children;
var count = 0;
for(let i=7;i< films_items.length;i++) {
    films_items[i].style.display = "none"
}
for(let i=7;i< films_items2.length;i++) {
    films_items2[i].style.display = "none"
}




function sliderFilms(){
    if (count%2 == 0)  {
        for(let i=0;i<films_items.length;i++) {
            films_items[i].style.display = "none";
            if (i>=8) {
                films_items[i].style.display = "flex";
              
            }
     
        }
        count++;
    }
    else {
        for(let i=0;i<films_items.length;i++) {
            films_items[i].style.display = "flex";
            films_items[i].style.justifyContent = "space-evenly";
            if (i>=8) {
                films_items[i].style.display = "none";
              
            }
     
        }

        count++;
    }

}



