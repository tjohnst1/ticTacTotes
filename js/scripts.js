var Space = function(x, y, mark){

  this.x = x;
  this.y = y;
  this.mark = mark;

}

Space.prototype.createMark = function(player) {
  this.mark = player.mark;
}

var Board = function(){
  this.spaces = [];
}

Board.prototype.fill = function() {
  if (this.spaces.length === 0) {
    for (var i = 0; i < 3; i += 1) {
      for (var j = 0; j < 3; j += 1) {
        this.spaces.push(new Space(i, j, ""));
        // this[[i,j]] = "";
      }
    }
  }
  return this.spaces;
}

var Player = function(name,mark){
  this.name = name;
  this.mark = mark;
}

var Game = function(playerOne, playerTwo, board){

  this.board = board;
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;

};

// Game.prototype.isOver? = function() {
//   this.board.spaces.forEach(function() {
//
//   });
// }

Game.prototype.lineWin = function(currentSpace, axis){
  var allSpaces = this.board.spaces;
  var coordinate = currentSpace[axis];

  var filteredSpaces = allSpaces.filter(function(space){return space[axis] === coordinate});

  filteredSpaces.forEach(function(filteredSpace){
    if (filteredSpace[axis].mark !== currentSpace[axis].mark){
      return false;
  });

  return true;

}
