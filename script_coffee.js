// Generated by CoffeeScript 1.7.1
(function() {
  var animation, array, even, formatBoxes, odd, toggler, welcome, word_show, wordsBehind;

  $(function() {
    console.log("Welcome to the Game of Memory");
    animation();
    odd();
    formatBoxes();
    even();
    welcome();
    return toggler();
  });

  formatBoxes = function() {
    return $(".box").css({
      height: "150px",
      width: "150px",
      display: "inline-block",
      float: "left"
    });
  };

  odd = function() {
    return $(".odd").css({
      background: "red"
    });
  };

  even = function() {
    return $(".even").css({
      background: "black"
    });
  };

  welcome = function() {
    if (confirm("Are you ready to play?")) {
      return $('#main-container').css({
        opacity: '1'
      });
    } else {
      return false;
    }
  };

  toggler = function() {
    return $(".box").click(function() {
      return $(this).toggleClass('hide');
    });
  };

  animation = function() {
    return $("h1").click(function() {
      return $(this).animate({
        opacity: ".5"
      });
    });
  };

  array = ["function", "rmoveClass", "object", "click_event", "blur", "alert", "console_log", "focus"];

  word_show = array[Math.floor(Math.random() * array.length)];

  wordsBehind = function() {
    var assign;
    return assign = $(".word");
  };

}).call(this);
