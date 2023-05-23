$(document).ready(function(){
    $("#loader").hide();
    $(document).ajaxStart(function () { $("#loader").show(); }).ajaxStop(function () { $("#loader").hide(); })
    $("#search-btn").click(getDefinition);
    $("#search-term").keypress(function () { 
        if(event.key === 'Enter') getDefinition();
     });
});


function getDefinition() { 
    $searchString = String($("#search-term").val()).trim();
    if ($searchString == "") return;
    else {
        $.ajax({
            url: "http://localhost:3000",
            type: "GET",
            data: {
                searchString: $searchString,
            },
            dataType: "json",
            success: showDefinition,
            error: noDefinition
        });
    }
}

function showDefinition(data) {
    $(".search-result").text("");
    $(".info").text("");

    if(data.length == 0) {
        $(".info")
        .text("No definitions found in dictionary for the word: "+$searchString)
        .css({"color": "#BC70A4", "text-align": "center", "font-size": "30px" });
    } else {
        var sectionSearchResult = $(".search-result");
        var ol = $("<ol>");

        for (let i = 0; i < data.length; i++) {
            var li = $("<li>").text(data[i].wordtype + " => "+ data[i].definition);
            ol.append(li).append("<br>");
        }
        sectionSearchResult.append(ol);
    }
}

function noDefinition(error) { 
    $(".info").text("An unexpected error has occured, please try again...").css({"color": "red", "text-align": "center", "font-size": "30px" });
    $(".search-result").text("");
}
