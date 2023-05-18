$(document).ready(function () {
    let userClickedStart = false;
    let userHitWall = false;
    let userHasWon = false;
    let initText = $("#status").text();

    function lose() { 
        if(userClickedStart && !userHasWon){
            $("#maze .boundary").addClass("youlose");
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
        $("#maze .boundary").removeClass("youlose");
        userHitWall = false;
        $("#status").text(initText);
     }

    $("#maze div.boundary").mouseover(lose);

    $("#end").mouseover(win);

    $("#start").click(restart);

    $("#maze").mouseleave(function () { 
        lose();
    });

});
