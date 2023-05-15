$(document).ready(function () {
    let userClickedStart = false;
    let userHitWall = false;
    let userHasWon = false;
    let initText = $("#status").text();

    function lose() { 
        if(userClickedStart && !userHasWon){
            $(".boundary").addClass("youlose");
            if(!userHitWall){
                $("#status").text("You Lose! 😢 😞 😭 😩");
            }
            userHitWall = true;
        }
    }

    function win() { 
        if(userClickedStart && !userHitWall && !userHasWon) {
            userHasWon = true;
            $("#status").text("You win!🥇 🏆 🎉 😍");
        }
    }

    function restart() { 
        userClickedStart = true;
        userHasWon = false;
        $(".boundary").removeClass("youlose");
        userHitWall = false;
        $("#status").text(initText);
     }

    $("#maze div.boundary").mouseover(lose);

    $("#end").mouseover(win);

    $("#start").click(restart);

    $(document).mousemove(function(event){
        if(userClickedStart && !userHasWon){
            if((event.pageX < 585 || event.pageX > 1092) || (event.pageY < 146 || event.pageY > 446)) {
                lose();
            }
        }
    });

});
