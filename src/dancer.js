var Dancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
};
Dancer.prototype.step = function(){
  //debugger;
  var that = this;
  //Doesn't work
  //setTimeout(that.step.bind(that),that.timeBetweenSteps);
  //Doesn't work
  //setTimeout( that.step.bind(that),that.timeBetweenSteps);
  //Doesn't work
  // setTimeout(function(){

  // //  that.step.call(that);
  //   that.step
  // },that.timeBetweenSteps);
  //
  //
  //WORKS
   setTimeout(function(){
    that.step;
  }, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){

  var styleSettings = {
      top: top,
      left: left
    };
  this.$node.css(styleSettings);
};

