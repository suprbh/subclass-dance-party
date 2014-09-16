var TapDancer = function(top, right, timeBetweenSteps){
  Dancer.call(this,top,right,timeBetweenSteps);
  this.top = top;
  this.right = right;
  this.oldStep = Dancer.prototype.step;
  this.timeBetweenSteps = timeBetweenSteps;
  //debugger;
  this.$node=$('<span class="tapDancer"></span>');
  this.setPosition(top,right);
  //this.$node = $('<span class="dancer"></span>');
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
  this.oldStep();
  //debugger;
  this.$node.toggle();
};
