describe('Space', function() {
  var testSpace;
  before(function() {
    testSpace = new Space(0, 1, "");
  });

  it('has a x coordinate', function() {
    expect(testSpace.x).to.eql(0);
  });

  it('has a y coordinate', function() {
    expect(testSpace.y).to.eql(1);
  });

  it('can be marked', function() {
    var newPlayer = new Player('Travis', 'X');
    testSpace.createMark(newPlayer);
    expect(testSpace.mark).to.eql('X');
  });
});

describe('Board', function() {
  it('returns an empty array', function(){
    var newBoard = new Board();
    expect(newBoard.spaces).to.eql([])
  });


  it('returns an array of spaces', function() {
    var newBoard = new Board();

    var testSpace = new Space(0, 0, "");
    var testSpace2 = new Space(0, 1, "");
    var testSpace3 = new Space(0, 2, "");
    newBoard.spaces.push(testSpace);
    newBoard.spaces.push(testSpace2);
    newBoard.spaces.push(testSpace3);
    expect(newBoard.spaces).to.eql([testSpace, testSpace2, testSpace3]);
  });

  it('fills the board with 9 spaces', function(){
    var newBoard = new Board();
    newBoard.fill();
    console.log(newBoard.spaces);
    expect(newBoard.spaces.length).to.eql(9);
    });

});

describe('Player', function() {
  it('has a name', function() {
    var newPlayer = new Player('Travis', 'X');
    expect(newPlayer.name).to.eql('Travis');
  });

  it('has a mark', function() {
    var newPlayer = new Player('', 'X');
    expect(newPlayer.mark).to.eql('X');
  });

});

describe('Game', function() {
  it('has a board', function() {
    var newBoard = new Board();
    var newGame = new Game(null, null, newBoard);
    expect(newGame.board).to.eql(newBoard);
  });

  it('has 2 players', function() {
    var player1 = new Player();
    var player2 = new Player();
    var newGame = new Game(player1, player2, null);
    expect(newGame.playerOne).to.eql(player1);
  });

  it('returns true if a straight line win', function() {
    var player1 = new Player();
    var player2 = new Player();
    var newBoard = new Board();
    newBoard.fill();
    var newGame = new Game(player1, player2, newBoard);
    var testSpace = newGame.board.spaces[0];
    newGame.board.spaces[0].mark = "X";
    newGame.board.spaces[1].mark = "X";
    newGame.board.spaces[2].mark = "X";
    expect(newGame.lineWin(testSpace, 'X')).to.eql(true);
    });

  it('returns false if no a straight line win', function() {
    var player1 = new Player();
    var player2 = new Player();
    var newBoard = new Board();
    newBoard.fill();
    var newGame = new Game(player1, player2, newBoard);
    var testSpace = newGame.board.spaces[0];
    newGame.board.spaces[0].mark = "X";
    newGame.board.spaces[1].mark = "X";
    newGame.board.spaces[2].mark = "O";
    expect(newGame.lineWin(testSpace, 'x')).to.eql(false);
    });

  it('returns false if no a diag line win', function() {
    var player1 = new Player();
    var player2 = new Player();
    var newBoard = new Board();
    newBoard.fill();
    var newGame = new Game(player1, player2, newBoard);
    var testSpace = newGame.board.spaces[0];
    newGame.board.spaces[0].mark = "X";
    newGame.board.spaces[4].mark = "X";
    newGame.board.spaces[8].mark = "O";
    expect(newGame.diagWin(testSpace)).to.eql(false);
    });

  it('returns true if a diag line win', function() {
    var player1 = new Player();
    var player2 = new Player();
    var newBoard = new Board();
    newBoard.fill();
    var newGame = new Game(player1, player2, newBoard);
    var testSpace = newGame.board.spaces[2];
    newGame.board.spaces[2].mark = "X";
    newGame.board.spaces[4].mark = "X";
    newGame.board.spaces[6].mark = "X";
    expect(newGame.diagWin(testSpace)).to.eql(true);
    });

});
