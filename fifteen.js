"use strict";

(function(){
  window.addEventListener("load", load);
  var rows_columns = 4;
  var tileNode = document.createElement("empty");
  var EX = 3;
  var EY = 3;

  function load(){
    drawPuzzle();
  }


  function drawPuzzle(){  //Function to draw the puzzle area, FINISHED.
      var puzzleArea = document.getElementById("puzzlearea");
      var tile = puzzleArea.children;
      puzzleArea.appendChild(tileNode);
      var i = 0;
      for(var y = 0; y < rows_columns; y++){
        for(var x =0; x < rows_columns; x++){
          tile[i].classList.add("puzzlepiece");
          tile[i].style.left = 100 * x + "px";
          tile[i].style.top = 100 * y + "px";
          tile[i].setAttribute("id", "xy(" + x + "," + y + ")");
          tile[i].onmouseover = highlight;
          tile[i].onmouseout = unhighlight;
          //tile[i].style.backgroundPosition = (0 - 100 * x) + "px" + " " + (0 - 100 * y) + "px";
          i++;         
        }
      }
  }

  function moveable(div){
    var surrounding = getSurrounding();
    if(surrounding.indexOf(div.getAttribute("id")) != -1){
      return true;
    }else{
      return false;
    }
  }

  function getSurrounding(){
    var up = "xy(" + EX + "," + (EY-1) + ")";
    var down = "xy(" + EX + "," + (EY+1) + ")";
    var right = "xy(" + (EX-1) + "," + EY + ")";
    var left = "xy(" + (EX+1) + "," + EY + ")";

    var surrounding = [up, down, left, right];
    var moveableTile= [];

    for(var i = 0; i < moveableTile.length; i++){
      if(document.getElementById(surrounding[i]) != null){
        moveableTile.push(surrounding[i]);
      }
    }
    return moveableTile;
  }

  function highlight(){
    if(moveable(this)){
      this.classList.add("moveablepiece");
    }
  }

  function unhighlight(){
    if(moveable(this)){
      this.classList.remove("moveablepiece");
    }
  }
  function clicktoMove(){
    moveTile(this);
  }
  function moveTile(){

  }
})();