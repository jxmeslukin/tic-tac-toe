/*

       _                          __      __   _     
      (_)  ______ ___  ___  _____/ /_  __/ /__(_)___ 
     / / |/_/ __ `__ \/ _ \/ ___/ / / / / //_/ / __ \
    / />  </ / / / / /  __(__  ) / /_/ / ,< / / / / /
 __/ /_/|_/_/ /_/ /_/\___/____/_/\__,_/_/|_/_/_/ /_/ 
/___/                                                

*/
var choice = null
var numClick = 0
var gameOver = false
var whosGo;
var localGo = 2


function startGameOne() {
    //make board appear - use css animation - choose whosGo 
    var gameBoard = document.getElementById('gameBoard');
    var playerOneButton = document.getElementById('playerOne');
    var playerTwoButton = document.getElementById('playerTwo');
    gameBoard.style.display = "block";
    playerOneButton.style.display = "none";
    playerTwoButton.style.display = "none";

    //choose who starts 
}


function cellChoice(choice) {
    var a1 = document.getElementById('a1');
    var a2 = document.getElementById('a2');
    var a3 = document.getElementById('a3');
    var b1 = document.getElementById('b1');
    var b2 = document.getElementById('b2');
    var b3 = document.getElementById('b3');
    var c1 = document.getElementById('c1');
    var c2 = document.getElementById('c2');
    var c3 = document.getElementById('c3')

    if(numClick === 0) {
        localGo = Math.floor(Math.random() * 2) + 1
        alert(localGo + " is first.")
    }

    console.log(localGo)

    switch (choice) {
        // fix 
        case 1:
            if (a1.innerHTML != "") {
                console.log("illegal move")
                return (alert("Can not go where there is filled space."))
            } else if (localGo === 2) {
                a1.innerHTML = "X"
                localGo = 1
                numClick = numClick + 1
                checkWin(numClick);
                console.log(localGo)
            } else if (localGo === 1) {
                a1.innerHTML = "O"
                localGo = 2
                numClick = numClick + 1
                checkWin(numClick);
            }

            break;
        case 2:
            if (a2.innerHTML != "") {
                console.log("illegal move")
                return (alert("Can not go where there is filled space."))
            } else if (localGo === 2) {
                a2.innerHTML = "X"
                localGo = 1
                numClick = numClick + 1
                checkWin(numClick);
            } else if (localGo === 1) {
                a2.innerHTML = "O"
                localGo = 2
                numClick = numClick + 1
                checkWin(numClick);
            }

            break;
        case 3:
            if (a3.innerHTML != "") {
                console.log("illegal move")
                return (alert("Can not go where there is filled space."))
            } else if (localGo === 2) {
                a3.innerHTML = "X"
                localGo = 1
                numClick = numClick + 1
                checkWin(numClick);
                console.log(localGo)
            } else if (localGo === 1) {
                a3.innerHTML = "O"
                localGo = 2
                numClick = numClick + 1
                checkWin(numClick);
            }
            break;
        case 4:
            if (b1.innerHTML != "") {
                console.log("illegal move")
                return (alert("Can not go where there is filled space."))
            } else if (localGo === 2) {
                b1.innerHTML = "X"
                localGo = 1
                numClick = numClick + 1
                checkWin(numClick);
                console.log(localGo)
            } else if (localGo === 1) {
                b1.innerHTML = "O"
                localGo = 2
                numClick = numClick + 1
                checkWin(numClick);
            }
            break;
        case 5:
            if (b2.innerHTML != "") {
                console.log("illegal move")
                return (alert("Can not go where there is filled space."))
            } else if (localGo === 2) {
                b2.innerHTML = "X"
                localGo = 1
                numClick = numClick + 1
                checkWin(numClick);
                console.log(localGo)
            } else if (localGo === 1) {
                b2.innerHTML = "O"
                localGo = 2
                numClick = numClick + 1
                checkWin(numClick);
            }
            break;
        case 6:
            if (b3.innerHTML != "") {
                console.log("illegal move")
                return (alert("Can not go where there is filled space."))
            } else if (localGo === 2) {
                b3.innerHTML = "X"
                localGo = 1
                numClick = numClick + 1
                checkWin(numClick);
                console.log(localGo)
            } else if (localGo === 1) {
                b3.innerHTML = "O"
                localGo = 2
                numClick = numClick + 1
                checkWin(numClick);
            }
            break;
        case 7:
            if (c1.innerHTML != "") {
                console.log("illegal move")
                return (alert("Can not go where there is filled space."))
            } else if (localGo === 2) {
                c1.innerHTML = "X"
                localGo = 1
                numClick = numClick + 1
                checkWin(numClick);
                console.log(localGo)
            } else if (localGo === 1) {
                c1.innerHTML = "O"
                localGo = 2
                numClick = numClick + 1
                checkWin(numClick);
            }
            break;
        case 8:
            if (c2.innerHTML != "") {
                console.log("illegal move")
                return (alert("Can not go where there is filled space."))
            } else if (localGo === 2) {
                c2.innerHTML = "X"
                localGo = 1
                numClick = numClick + 1
                checkWin(numClick);
                console.log(localGo)
            } else if (localGo === 1) {
                c2.innerHTML = "O"
                localGo = 2
                numClick = numClick + 1
                checkWin(numClick);
            }
            break;
        case 9:
            if (c3.innerHTML != "") {
                console.log("illegal move")
                return (alert("Can not go where there is filled space."))
            } else if (localGo === 2) {
                c3.innerHTML = "X"
                localGo = 1
                numClick = numClick + 1
                checkWin(numClick);
                console.log(localGo)
            } else if (localGo === 1) {
                c3.innerHTML = "O"
                localGo = 2
                numClick = numClick + 1
                checkWin(numClick);
            }
            break;
    }

}

function checkWin(numClick) {
    var endGame = document.getElementById('gameOver')


    if(a1.innerHTML == "X" && a2.innerHTML == "X" && a3.innerHTML == "X") {
        gameOver = true
        endGame.innerHTML = "X Wins";
        endGame.display = "block";
        return();

    }
    if(b1.innerHTML == "X" && b2.innerHTML == "X" && b3.innerHTML == "X") {
        gameOver = true
        endGame.innerHTML = "X Wins";
        endGame.display = "block";
        return();
    }
    if(c1.innerHTML == "X" && c2.innerHTML == "X" && c3.innerHTML == "X") {
        gameOver = true
        endGame.innerHTML = "X Wins";
        endGame.display = "block";
        return();
    }
    if(a1.innerHTML == "X" && b1.innerHTML == "X" && c1.innerHTML == "X") {
        gameOver = true
        endGame.innerHTML = "X Wins";
        endGame.display = "block";
        return();

    }
    if(a2.innerHTML == "X" && b2.innerHTML == "X" && c2.innerHTML == "X") {
        gameOver = true
        endGame.innerHTML = "X Wins";
        endGame.display = "block";
        return();
    }
    if(a3.innerHTML == "X" && b3.innerHTML == "X" && c3.innerHTML == "X") {
        gameOver = true
        endGame.innerHTML = "X Wins";
        endGame.display = "block";
        return();
    }
    if(a1.innerHTML == "X" && b2.innerHTML == "X" && c3.innerHTML == "X") {
        gameOver = true
        endGame.innerHTML = "X Wins";
        endGame.display = "block";
        return();
    }
    if(a3.innerHTML == "X" && b2.innerHTML == "X" && c1.innerHTML == "X") {
        gameOver = true
        endGame.innerHTML = "X Wins";
        endGame.display = "block";
        return();
    }
    if(a1.innerHTML == "O" && a2.innerHTML == "O" && a3.innerHTML == "O") {
        gameOver = true
        endGame.innerHTML = "O Wins";
        endGame.display = "block";
        return();
    }
    if(b1.innerHTML == "O" && b2.innerHTML == "O" && b3.innerHTML == "O") {
        gameOver = true
        endGame.innerHTML = "O Wins";
        endGame.display = "block";
        return();
    }
    if(c1.innerHTML == "O" && c2.innerHTML == "O" && c3.innerHTML == "O") {
        gameOver = true
        endGame.innerHTML = "O Wins";
        endGame.display = "block";
        return();
    }
    if(a1.innerHTML == "O" && b1.innerHTML == "O" && c1.innerHTML == "O") {
        gameOver = true
        endGame.innerHTML = "O Wins";
        endGame.display = "block";
        return();
    }
    if(a2.innerHTML == "O" && b2.innerHTML == "O" && c2.innerHTML == "O") {
        gameOver = true
        endGame.innerHTML = "O Wins";
        endGame.display = "block";
        return();
    }
    if(a3.innerHTML == "O" && b3.innerHTML == "O" && c3.innerHTML == "O") {
        gameOver = true
        endGame.innerHTML = "O Wins";
        endGame.display = "block";
        return();
    }
    if(a1.innerHTML == "O" && b2.innerHTML == "O" && c3.innerHTML == "O") {
        gameOver = true
        endGame.innerHTML = "O Wins";
        endGame.display = "block";
        return();
    }
    if(a3.innerHTML == "O" && b2.innerHTML == "O" && c1.innerHTML == "O") {
        gameOver = true
        endGame.innerHTML = "O Wins";
        endGame.display = "block"
        return();
    }


    if (numClick = 9) {
        gameOver = true
        console.log(gameOver)
    }
}