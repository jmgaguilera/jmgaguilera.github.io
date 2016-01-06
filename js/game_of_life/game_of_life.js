// Game of life

/****
 * This implementation try to be easy of understand.
 * for more complex and efficient implementations
 * follow this link: http://pmav.eu/stuff/javascript-game-of-life-v3.1.1/
 ****/

'use strict';

// Cell

function Cell() {
  this.status = Cell.prototype.status.EMPTY;
}

Cell.prototype.status = {EMPTY: 'E', BORN: 'B', ADULT: 'A', DEATH: 'D'};

// Board

function Board(size) { // Creates an empty board
  size = size || 100; // default to 100
  this.numGeneration = 1;
  this.cells = new Array(size);
  for (var i=0;i<size;i++) {
    var row = Array(size);
    for (var j=0; j<size; j++) row[j] = new Cell();
    this.cells[i] = row;
  }
}

Board.prototype.addCell = function(x, y) {
  this.cells[x][y].status = Cell.prototype.status.BORN;
}

Board.prototype.addCells = function(arrayCells) { //Expects something like this [[x,y],[x,y],..., [x,y]]
  for (var i=0; i<arrayCells.length; i++) {
    var x = arrayCells[i][0];
    var y = arrayCells[i][1];
    this.addCell(x,y);
  }
}

Board.prototype.calculateNextGen = function() { // Calculate next generation of Cells
  var size = this.cells.length;
  for (var i=0; i<size; i++){
    for (var j=0; j<size; j++) {
      var numNeighbours = this.calNeighbours(i,j);
      if (numNeighbours == 3 && this.cells[i][j].status == Cell.prototype.status.EMPTY) {
        this.cells[i][j].status = Cell.prototype.status.BORN;
      } else if (this.cells[i][j].status != Cell.prototype.status.EMPTY && numNeighbours != 2 && numNeighbours != 3) {
        this.cells[i][j].status = Cell.prototype.status.DEATH;
      }
    }
  }
  this.numGeneration += 1;
}

Board.prototype.calNeighbours = function(x, y) {
  var x1 = (x-1 < 0 ? 0 : x-1);
  var x2 = (x+1 < this.cells.length ? x+1 : x);
  var y1 = (y-1 < 0 ? 0 : y-1);
  var y2 = (y+1 < this.cells.length ? y+1 : y);

  var countNeighbours = 0;
  for (var i=x1; i<=x2; i++) {
    for (var j=y1; j<=y2; j++) {
      if (this.cells[i][j].status != Cell.prototype.status.EMPTY
          && !(i==x && j==y)
          && this.cells[i][j].status != Cell.prototype.status.BORN) {
        countNeighbours += 1;
      }
    }
  }
  return countNeighbours;
}

Board.prototype.establishGen = function() {
  var size = this.cells.length;
  for (var i=0; i<size; i++){
    for (var j=0; j<size; j++) {
      if (this.cells[i][j].status == Cell.prototype.status.BORN) {
        this.cells[i][j].status = Cell.prototype.status.ADULT;
      } else if (this.cells[i][j].status == Cell.prototype.status.DEATH) {
        this.cells[i][j].status = Cell.prototype.status.EMPTY;
      }
    }
  }
}

Board.prototype.toString = function() {
  var strBoard = "num. gen:".concat(this.numGeneration).concat("\n");
  for (var i=0; i<this.cells.length; i++){
    for (var j=0; j<this.cells.length; j++) {
      strBoard = strBoard.concat(this.cells[i][j].status);
    }
    strBoard = strBoard.concat("\n");
  }
  return strBoard;
}

Board.prototype.toHTMLCanvas = function(canvas) {
  var ctx = canvas.getContext("2d");
  // init
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.font = "16px Arial";
  ctx.fillStyle = "#000000";
  ctx.fillText("Generación:".concat(this.numGeneration), 2, 16);
  var stepX = (canvas.width - 4) / this.cells.length;
  var stepY = (canvas.height - 16) / this.cells.length;
  var initX = 2;
  var initY = 18;
  // draw cells
  var posX = initX;
  for (var i=0; i<this.cells.length; i++) {
    var posY = initY;
    for (var j=0; j<this.cells.length; j++) {
        if (this.cells[i][j].status == Cell.prototype.status.ADULT) {
          ctx.fillStyle = "#00FF00";
          ctx.fillRect(posX, posY, stepX-2, stepY-2);
        } else if (this.cells[i][j].status == Cell.prototype.status.EMPTY) {
          ctx.clearRect(posX, posY, stepX-2, stepY-2);
        }
        posY += stepY;
    }
    posX += stepX;
  }
}

