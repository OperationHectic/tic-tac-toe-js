function BoardControls(board_model)
{
   this.bMod = board_model; 
   this.buttons = [];
   this.playerOne = true;
}

BoardControls.prototype.btnProperties = function(button)
{
   this.buttons.push(button);
   
   button.innerHTML = this.playerOne ? "X" : "O";
   button.disabled = true;
   button.style.background = this.playerOne ? "blue" : "red";
}

BoardControls.prototype.setSymbol = function(button, row, col)
{
   this.btnProperties(button);

   curPlayer = this.playerOne ? bMod.x : bMod.o;
   this.bMod.setValue(row, col, curPlayer);
   this.playerOne = !this.playerOne; 
   if(this.bMod.checkWin(curPlayer)) 
   {
      var symbol = (curPlayer == bMod.x) ? "X" : "O";
      console.log(symbol + " Wins");
      $("#win_message").html('<h3>'+symbol+' Wins</h3>')
   }
}

BoardControls.prototype.reset = function(bCon)
{
   this.bMod.reset();
   $("#win_message").html('')
   this.playerOne = true;
   for(var i=0; i<this.buttons.length; i++)
   {
      this.buttons[i].innerHTML = "";
      this.buttons[i].style.background = ""; 	
      this.buttons[i].disabled = false; 
   }
}
