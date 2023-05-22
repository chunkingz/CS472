$(document).ready(function (){ 
    $("#loader").hide();
    $(document).ajaxStart(function () { $("#loader").show(); }).ajaxStop(function () { $("#loader").hide(); })
    $("#view-button").click(getAPOD);
});

function getAPOD() { 
    $.ajax({
        url: "https://api.nasa.gov/planetary/apod",
        type: "GET",
        data: {
            api_key: "TQSMNKnUqQRd5axRqadzrkoQiiFv16aFcBxJj7Kz",
            date: $("#date").val()
        },
        dataType: "json",
        success: showPicture,
        error: noPicture
    });
}

function showPicture(data) {
    $("#pic").attr("src", data.url);
    $(".APOD-Title").text(data.title).css("font-size", 24);
    $(".info").text("");
}

function noPicture(error) { 
    $(".info").text(error.responseJSON.msg).css("color", "red");
    $("#pic").attr("src", "");
    $(".APOD-Title").text("")
}
