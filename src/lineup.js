var lineUp = function(){
  for(var i =0;i<dancers.length;i++){
   // dancers[i].setPosition(0,0);
   //

   var styleSettings = {
    float:'right',
    top:0
  };
  dancers[i].$node.css(styleSettings);
  }
};
