var TapDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this,top,left,timeBetweenSteps);
  //this.oldStep = Dancer.prototype.step;
  //debugger;
  this.$node=$('<span class="tapDancer"></span>');
  this.setPosition(top,left);
};

TapDancer.prototype = Object.create(Dancer.prototype);
TapDancer.prototype.construct = TapDancer;

// TapDancer.prototype.setPosition = function(top, left){
//   var styleSettings = {
//       top: top,
//       left: left
//     };
//   this.$node.css(styleSettings);
// };
TapDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  //this.$node.toggle();
  //debugger;
  //var that = this;
  /*setInterval(function() {
    debugger;
    that.$node.animate({ left: $('body').width()}, 3000, 'linear', function() {
      $(that.$node).css({ left: - $(that.$node).width()});
    });
  }, 10);*/
  
};

