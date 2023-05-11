"use strict";

$(document).ready(function () {
    $("#stop").attr("disabled","disabled");

    const animationOptions = ["Blank", "Exercise", "Juggler", "Bike", "Dive", "Custom"];
    for (let i = 0; i < animationOptions.length; i++) {
        $("#animation").append(`<option value="${animationOptions[i].toUpperCase()}"> ${animationOptions[i]} </option>`)
    }

    const sizeOptions = ["Tiny", "Small", "Medium", "Large", "Extra Large", "XXL"]
    for (let i = 0; i < sizeOptions.length; i++) {
        if(sizeOptions[i] == "Medium") {
            $("#size").append(`<option value="${sizeOptions[i]}" selected> ${sizeOptions[i]} </option>`)
        } else {
            $("#size").append(`<option value="${sizeOptions[i]}"> ${sizeOptions[i]} </option>`)
        }
    }

    let initialState;
    let frames = [];
    let speed = 250;
    let index = 0;
    let animationInterval = "";
    let isAnimating = false;

    const animate = () => {
        $("#textarea").val(frames[index]);
        index++;
        if(index == frames.length) index = 0;
    }

    $("#start").click(function () { 
        if(!isAnimating){
            $(this).attr("disabled","disabled");
            $("#animation").attr("disabled","disabled");
            $("#stop").removeAttr("disabled");

            clearInterval(animationInterval);
            animationInterval = setInterval(animate, speed);
            isAnimating = true;
        }
        
    });

    const setTextArea = (val) => {

        switch (val) {
            case "BLANK":
                $("#textarea").val(BLANK);
                break;
            case "EXERCISE":
                $("#textarea").val(EXERCISE);
                frames = EXERCISE.split("=====\n");
                break;
            case "JUGGLER":
                $("#textarea").val(JUGGLER);
                frames = JUGGLER.split("=====\n");
                break;
            case "BIKE":
                $("#textarea").val(BIKE);
                frames = BIKE.split("=====\n");
                break;
            case "DIVE":
                $("#textarea").val(DIVE);
                frames = DIVE.split("=====\n");
                break;
            case "CUSTOM":
                $("#textarea").val(CUSTOM);
                break;
            default:
                // console.log("do nothing");
                break;
        }
    }

    $("#stop").click(function () { 
        if(isAnimating){
            $(this).attr("disabled","disabled");
            $("#start").removeAttr("disabled");
            $("#animation").removeAttr("disabled");

            clearInterval(animationInterval);
            // index = 0;
            // $("#textarea").val(frames[index]);
            setTextArea(initialState);
            isAnimating = false;
        }
    });

    $("#animation").change(function () { 
        initialState = $(this).val();
        setTextArea($(this).val());
    })
    
    $("#size").change(function () { 
         
        switch ($(this).val()) {
            case "Tiny":
                $("#textarea").css("font-size", "7pt");
                break;
            case "Small":
                $("#textarea").css("font-size", "10pt");
                break;
            case "Medium":
                $("#textarea").css("font-size", "12pt");
                break;
            case "Large":
                $("#textarea").css("font-size", "16pt");
                break;
            case "Extra Large":
                $("#textarea").css("font-size", "24pt");
                break;
            case "XXL":
                $("#textarea").css("font-size", "32pt");
                break;
            default:
                // console.log("do nothing");
                break;
        }
    })

    const setAnimationSpeed = () => {
        if(isAnimating){
            clearInterval(animationInterval);
            animationInterval = setInterval(animate, speed);
        }
      }
    
    $("#speed").change(function () { 
        if ($(this).is(':checked')) {
            speed = 50;
        } else {
            speed = 250;
        }
        setAnimationSpeed();
    })

});
