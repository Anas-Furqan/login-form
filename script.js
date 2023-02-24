$(".input-text").focus(function(){
    $(this).prev('.fa').addClass('glowIcon');
});
$(".input-text").focusout(function(){
    $(this).prev('.fa').removeClass('glowIcon');
});

let ShowPass = () => {
    let pass = document.getElementsByClassName("input-text")[1];

    if (pass.type == "password") {
        pass.type = "text";
    }
    else {
        pass.type = "password";
    }
}