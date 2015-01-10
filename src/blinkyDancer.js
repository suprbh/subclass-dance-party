var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this,top,left,timeBetweenSteps);

  this.$node=$('<span class="dancer"></span>');
  this.setPosition(top,left);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.construct = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  //debugger;
  Dancer.prototype.step.call(this);
  this.$node.toggle();
  if (this.$node.css('background') === 'red'){
    console.log('changing red to yellow');
   this.$node.css({'background': 'yellow'});
  } else {
    console.log('changing other to red');
   this.$node.css({'background': 'red'});
  }
  /*var that = this;
  setInterval(function() {
    that.$node.animate({ left: $('body').width()}, 3000, 'linear', function() {
      $(that).css({ left: - $(that).width()});
    });
  }, 10);*/
};
