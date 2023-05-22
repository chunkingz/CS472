$(document).ready(function (){ 
    $("#loader").hide();
    $(document).ajaxStart(function () { $("#loader").show(); }).ajaxStop(function () { $("#loader").hide(); })
    $("#view-button").click(getAPOD);
});


function getAPOD() {
    let api_key = "TQSMNKnUqQRd5axRqadzrkoQiiFv16aFcBxJj7Kz";
    let date = $("#date").val();

    fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${date}`)
        .then(res => res.json())
        .then(data => {
            if (data.code == 400) noPicture(data);
            else showPicture(data);
        })
}

function showPicture(data) {
    $("#pic").attr("src", data.url);
    $(".APOD-Title").text(data.title).css("font-size", 24);
    $(".info").text("");
}

function noPicture(error) { 
    $(".info").text(error.msg).css("color", "red");
    $("#pic").attr("src", "");
    $(".APOD-Title").text("")
}
