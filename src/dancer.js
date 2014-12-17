   // Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){

  //var dancer = {};

  // use jQuery to create an HTML <span> tag

  this.$node = $('<span class="dancer"></span>');
  this.time_steps = timeBetweenSteps;
  this.step();
  this.top = top;
  this.left = left;



  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

//  return dancer;
};//makeDancer

  makeDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    //var that = this;
    //
    // var that = this;   this this refers to makeDancer obj
    // var stepTime = function(){
    //   that.step();
    // };
    this.calc_dist();
    setTimeout( this.step.bind(this), this.time_steps);  //the bound this refers to the caller of step which will be a makeBlinkyDancer obj
  };// the first this (i.e. context) gets replaced by the second this

  makeDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };


  makeDancer.prototype.calc_dist = function(){
      for(i = 0; i < window.dancers.length; i ++){
        var item = window.dancers[i];
        var squared_top = Math.pow(this.top - item.top, 2);
        var squared_left = Math.pow(this.left - item.left, 2);

        var distance = Math.pow(squared_top + squared_left, .5);


        console.log(distance);
         if(distance > 500){
            $(this).css({border: 50, color: red});
         }


      }
  }
 // calc_dist();
/****** OLD CODE *********

// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){

  //var dancer = {};

  // use jQuery to create an HTML <span> tag
  dancer.$node = $('<span class="dancer"></span>');


  dancer.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(dancer.step, timeBetweenSteps);
  };
  dancer.step();

  dancer.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    dancer.$node.css(styleSettings);
  };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  dancer.setPosition(top, left);

  return dancer;
};





 */
