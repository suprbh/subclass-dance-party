var Dancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this._timeBetweenSteps = timeBetweenSteps;
  //this.$node = $('<span onClick="animateDancer(this);" onmouseover="mouseEventHandler(this);" class="dancer"></span>');
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(this.top, this.left);
};
Dancer.prototype.step = function(){
  var that = this;
  this.$node.draggable();
  this.$node.droppable();

  
  // c reason: sinon lib. needs an extra clock tick to evaluate this.step at new () call.
  // c var context = this; // create fun. but evalutate in future
  // c delays evaluating context.step untill fn. is called.
  // c (no 2nd clock.tick) setTimeout(function(){context.step()}, this._timebetweenSteps);
  // c this.step is evaluated immediately.
  // c setTimeout((this.step).bind(this), this._timeBetweenSteps)
  setTimeout(function(){
    that.step();
  }, that._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){

  var styleSettings = {
      top: top,
      left: left
    };
  this.$node.css(styleSettings);
};

Dancer.prototype.getPosition=function(){
  return [this.top,this.left];
};

Dancer.prototype.withinBounds = function(x, y){
    if(x == null || typeof x == 'undefined') x = 1;
    if(y == null || typeof y == 'undefined') y = 1;

    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var height = this.$node.outerHeight();
    var width = this.$node.outerWidth();
 
    if(!width || !height){
        return false;
    }
    
    var bounds = this.$node.offset();
    bounds.right = bounds.left + width;
    bounds.bottom = bounds.top + height;

    //debugger;
    var visible = (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
    if(!visible){
        return false;   
    }
    
    var deltas = {
        top : Math.min( 1, ( bounds.bottom - viewport.top ) / height),
        bottom : Math.min(1, ( viewport.bottom - bounds.top ) / height),
        left : Math.min(1, ( bounds.right - viewport.left ) / width),
        right : Math.min(1, ( viewport.right - bounds.left ) / width)
    };
    
    return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;
};


