$ ->
  console.log "Welcome to the Game of Memory"
  animation()
  odd()
  formatBoxes()
  even()
  welcome()
  toggler()
  
formatBoxes = ->
  $(".box").css
    height: "150px"
    width: "150px"
    display: "inline-block"
    float: "left"

odd = ->
  $(".odd").css
    background: "red"
  
even = -> 
  $(".even").css
    background: "black"

welcome = ->
  if (confirm("Are you ready to play?"))
#        //  do something
    $('#main-container').css
      opacity: '1'
  else 
    return false

toggler = ->
  $(".box").click ->
    $(@).toggleClass('hide')

animation = ->
  $("h1").click ->
    $(@).animate
      opacity: ".5"

array = ["function", "rmoveClass", "object", "click_event", "blur", "alert", "console_log", "focus"]
word_show = array[Math.floor(Math.random() * array.length)]
wordsBehind = ->
  assign = $(".word")   




