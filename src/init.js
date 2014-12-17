$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 20000
    );
    $('.dancefloor').append(dancer.$node);

    //push dancer into array;
    window.dancers.push(dancer);
  });

  $('body').on("mouseover", '.dancer', function(event){
        $(this).css({top: -1000, left: -1000});
        // console.log(window.dancers[0].top);
  });

  $(".lineUp").on("click", function(){
    for(var i = 0; i < window.dancers.length; i++){
      var rand = Math.floor(Math.random() * 100);
      // console.log(rand);
      window.dancers[i].setPosition(rand, 0);
    }

    //console.log(window.dancers);
  });//  mouseover

   // console.log($(this).top);
   //
  var context = this;
  // $('body').on("mouseover", function(event){
  // setInterval(function(){
  //     for(i = 0; i < window.dancers.length; i ++){
  //       var item = window.dancers[i];
  //       var squared_top = Math.pow(($(context).top - item.top), 2);
  //       var squared_left = Math.pow(($(context).left - item.left),2);
  //       var distance = Math.pow((squared_top + squared_left), .5);

  //       console.log(distance);
  //   }
  // }, 3000);
// });

// calc_dist();


});

