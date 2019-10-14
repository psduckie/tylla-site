$(document).ready(function() {
    console.log(screen.width);
    if(screen.width >= 576) {
        $("#gamesbar").load("/storylines/gamesbar.html");
    }
});