var TapDancer = function(top, right, timeBetweenSteps){
  Dancer.call(this,top,right,timeBetweenSteps);
  this.top = top;
  this.right = right;
  this.oldStep = Dancer.prototype.step;
  this.timeBetweenSteps = timeBetweenSteps;
  //debugger;
  this.$node=$('<span class="tapDancer"></span>');
  this.setPosition(top,right);
  this.step();
  //debugger;
  // this.image = new Image();
  // this.image.src='/Users/HR10/Desktop/2014-09-subclass-dance-party/images/thumbnail.gif';
};

TapDancer.prototype = Object.create(Dancer.prototype);
TapDancer.prototype.construct = TapDancer;

TapDancer.prototype.setPosition = function(top, right){
  //debugger;
  var styleSettings = {
      top: top,
      right: right
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
