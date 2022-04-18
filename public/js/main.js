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




document.getElementById('link_k').onclick = function() {
    var khalil = document.getElementById('user_khalil').innerHTML;
    var current_user = document.getElementById('profil_name').innerHTML;
    if (current_user != khalil) {
        current_user = khalil;
        document.getElementById('to_change_name').innerHTML = khalil;
        document.getElementById('profil_name').innerHTML = khalil;
    }

}

document.getElementById('link_c').onclick = function() {
    var current_user = document.getElementById('profil_name').innerHTML;
    var cactus = document.getElementById('user_cactus').innerHTML;
    if (current_user != cactus) {
        current_user = cactus;
        document.getElementById('to_change_name').innerHTML = cactus;
        document.getElementById('profil_name').innerHTML = cactus;
    }

}

document.getElementById('link_s').onclick = function() {
    var current_user = document.getElementById('profil_name').innerHTML;
    var sam = document.getElementById('user_sam').innerHTML;
    if (current_user != sam) {
        current_user = sam;
        document.getElementById('to_change_name').innerHTML = sam;
        document.getElementById('profil_name').innerHTML = sam;
    }

}




