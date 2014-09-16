var TapDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this,top,left,timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.oldStep = Dancer.prototype.step;
  this.timeBetweenSteps = timeBetweenSteps;
  //debugger;
  this.$node=$('<span onmouseover="mouseEventHandler(this);" class="tapDancer"></span>');
  this.setPosition(top,left);
  this.step();
  //debugger;
  // this.image = new Image();
  // this.image.src='/Users/HR10/Desktop/2014-09-subclass-dance-party/images/thumbnail.gif';
};

TapDancer.prototype = Object.create(Dancer.prototype);
TapDancer.prototype.construct = TapDancer;

TapDancer.prototype.setPosition = function(top, left){
  //debugger;
  var styleSettings = {
      top: top,
      left: left
    };
  this.$node.css(styleSettings);
};
TapDancer.prototype.step = function(){
  //debugger;
  //debugger;
  this.oldStep();
  //debugger;
  this.$node.toggle();
};
