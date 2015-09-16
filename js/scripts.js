'use strict';

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
      }
    }
  }
  return this.spaces;
}

var Player = function(name,mark) {
  this.name = name;
  this.mark = mark;
}

var Game = function(playerOne, playerTwo, board) {

  this.board = board;
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;

};

// Game.prototype.isOver? = function() {
//   this.board.spaces.forEach(function() {
//
//   });
// }

Game.prototype.lineWin = function(currentSpace, axis) {
  var allSpaces = this.board.spaces;
  var win = true;
  axis = axis.toLowerCase();
  var filteredSpaces = allSpaces.filter(function(space) {
    return space[axis] === currentSpace[axis]
  });

  filteredSpaces.forEach(function(filteredSpace) {
    if (filteredSpace.mark !== currentSpace.mark) {
      win = false;
    }

  });
    return win;
}

Game.prototype.diagWin = function(currentSpace) {
  var allSpaces = this.board.spaces;
  var win = true;
  var filteredSpaces = allSpaces.filter(function(space) {
    return Math.abs(space.x - currentSpace.x) === Math.abs(space.y - currentSpace.y)
  });

  filteredSpaces.forEach(function(filteredSpace) {
    if (filteredSpace.mark !== currentSpace.mark) {
      win = false;
    }
  });

    return win;
}



$(document).ready(function(){

  $('#player-form').submit(function(event){

    event.preventDefault();

    var playerOne = $('#playerOne-name').val();
    var playerTwo = $('#playerTwo-name').val();
    var newBoard = new Board();

    var game = Game(playerOne, playerTwo, newBoard);
    $('#new-players').hide();
    $('#game-board').show();
  });

  $('td.blank-space').each(function() {
    $(this).click(function() {
      $(this).css('background', 'green');
    });
  });

});
