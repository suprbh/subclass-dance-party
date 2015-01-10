var lineUp = function(){
  for(var i =0;i<dancers.length;i++){
   var styleSettings = {
    float:'right',
    top:0
  };
  dancers[i].$node.css(styleSettings);
  }
};

var danceTogether = function(){
  var neighbors = ptheorem();
  console.log(neighbors);

  for (var i = 0; i < dancers.length; i++){
    for (var k = i+1; k < dancers.length; k++){
      if (neighbors[k] === i){
        // found neighbor
        // move neighbor close to dancer
        // move dancer
      } 
    }
  }
};

var animateDancer = function(context){
  //debugger;
  var $node = $(context);
  //$node.draggable();
  //$node.droppable();
  /*$node.animate({
          // backgroundColor: "#aa0000",
          // color: "#fff",
          width: 500
        }, 1000 );*/

};

var mouseEventHandler = function(context){
var $node = $(context);
$node.css({'top': Math.random()*$("body").height() ,
  'left': Math.random()*$("body").height()});
};

var ptheorem = function(){
  var position = [];
  for (var i = 0; i < dancers.length; i++){
    position[i] = dancers[i].getPosition();
  }

  var closestNeighbor = [];
  var minDistance = 10000;
  var distance = [];
  for (var j = 0; j < dancers.length; j++){
    closestNeighbor[j] = [];
    minDistance = 10000;
    distance[j] = [];
    for (var k = 0; k < dancers.length; k++){
      if (j != k){
        distance[j][k] = Math.sqrt(Math.pow((position[j][0]- position[k][0]),2)+Math.pow((position[j][1]-position[k][1]), 2));
        if (distance[j][k] < minDistance){
          minDistance = distance[j][k];
          closestNeighbor[j] = k;
        } 
      }else {
        distance[j][k] = 0;
      }
    }
  }
  return closestNeighbor;
};