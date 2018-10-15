var postNumber = 0

$(function() {
  new Board('#board');
});


var Board = function( selector ) {
  var $elem = $( selector );

  function initialize() {
    $elem.on("click", newStickyNote);
  };

  initialize();
};

var PostIt = function() {

  function initialize() {
    var random = Math.floor((Math.random() * 5) + 1);

    $("#board").append('<div class="sticky-note" id="'+postNumber+'"><div class="header"><a href="#">X</a></div><div contenteditable="true" class="content"></div></div>')
    $("#"+postNumber).css({'top': event.pageY, 'left': event.pageX});
    $(".sticky-note").draggable({handle: ".header"});
    $(".content").on("click", stopStickyNote);
    $("a").on("click", removeStickyNote);

    //These are for determining what color the sticky note will be. 
    if(random == 2){
      $("#"+postNumber).css("background-color","rgb(201,248,195)");
      $( "#"+postNumber ).find( ".header" ).css( "background-color", "rgb(197,247,193)");
    }

    if(random==3){
      $("#"+postNumber).css("background-color","rgb(214,240,250)");
      $( "#"+postNumber ).find( ".header" ).css( "background-color", "rgb(201,236,248)");
    }

    if(random == 4){
      $("#"+postNumber).css("background-color","rgb(243,204,243)");
      $( "#"+postNumber ).find( ".header" ).css( "background-color", "rgb(241,195,241)");
    }

    if(random == 5){
      $("#"+postNumber).css("background-color","rgb(252,252,252)");
      $( "#"+postNumber ).find( ".header" ).css( "background-color", "rgb(245,245,245)");
    }



  };

  function stopStickyNote(e){
    e.stopPropagation();
  };

  function removeStickyNote(e){
    e.stopPropagation();
    var $parent = $(this.parentElement.parentElement);
    $parent.hide('explode',{'pieces':10},500);
    $parent.remove();
  };

  initialize();
};

function newStickyNote() {
  new PostIt;
  postNumber += 1;
};