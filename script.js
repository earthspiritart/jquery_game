// Lets Create A Wrapper in jQuery's Document Ready Syntax
// for the functions we will build out today.
$(document).ready(function() {

    function formatBoxes() {
        $(".box").css({
            "height": "150px",
            "width": "150px",
            "display": "inline-block",
            "float": "left"
        });
    };
    formatBoxes()

    function odd() {
        $(".odd").css({
            "background": "red"
        });
    };
    odd()

    function even() {
        $(".even").css({
            "background": "black"
        });
    };
    even()

    function welcome() {
        if (confirm("Are you ready to play?")) {
            //  do something
            $('#main-container').css({
                'opacity': '1'
            });
        } else {
            // don't do anything or explicitly return false
        }
    };
    welcome()

    function toggler() {
        $(".box").click(function() {
            $(this).toggleClass('hide');
        });
    };
    toggler()

    function animation() {
        $("h1").click(function() {
            $(this).animate({
                left: "250px",
                opacity: ".5",
            });
        });
    };
    animation()


});

//function formatBoxes(){
//    $(".box").css({
//      "height": "150px",
//      "width": "150px",
//      "display": "inline-block",
//      "float": "left"
//    });
//  };
//  formatBoxes()
//
//  function odd(){
//    $(".odd").css({
//      "background": "red"
//    });
//  };
//
//  function even(){
//    $(".even").css({
//      "background": "black"
//    });
//  };
//
//  function welcome(){
//    if(confirm("Are you ready to play?")) {
//      $("h1").css({
//        "opacity": "1"
//    } else {
//      // 
//    });
//  };
//  welcome()
//