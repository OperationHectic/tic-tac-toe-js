var _top = 0;
var _mid = 1;
var _bot = 2;

var _left = 0;
var _center = 1;
var _right = 2;

function Board()
{
   this.x = 1;
   this.o = 2;
   
   var board = 
   [
     [0,0,0],
     [0,0,0],
     [0,0,0],
   ];

   this.setValue = function(row, col, symbol)
   {
      board[row][col] = symbol;
   }

   this.getRows = function() { return board[0].length; }
   this.getCols = function() { return board.length; } 

   this.checkWin = function(s)
   {
      return ((board[_top][_left] == s && board[_top][_center] == s && board[_top][_right] == s)    ||
              (board[_mid][_left] == s && board[_mid][_center] == s && board[_mid][_right] == s)    ||
              (board[_bot][_left] == s && board[_bot][_center] == s && board[_bot][_right] == s)    ||
              (board[_top][_left] == s && board[_mid][_left] == s && board[_bot][_left] == s)       ||   
              (board[_top][_center] == s && board[_mid][_center] == s && board[_bot][_center] == s) ||
              (board[_top][_right] == s && board[_mid][_right] == s && board[_bot][_right] == s)    ||
              (board[_top][_left] == s && board[_mid][_center] == s && board[_bot][_right] == s)    ||
              (board[_top][_right] == s && board[_mid][_center] == s && board[_bot][_left] == s))
   }

   this.reset = function() 
   { 
      board =
      [
     	[0,0,0],
     	[0,0,0],
     	[0,0,0],
      ];	 
   }

   this.printBoard = function()
   { 
      var txt = "";
      for(var i=0; i<board[0].length; i++)
      {
         for(var j=0; j<board.length; j++)
         {
            txt += board[i][j].toString() + " ";
         }
         txt += "\n";
      } 	
      console.log(txt);
   }
}
