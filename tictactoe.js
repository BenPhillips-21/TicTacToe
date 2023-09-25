const gameBoard = ["", "", "", "", "", "", "", "", ""]

function displayBoard() {
    const spaceOne = document.querySelector('.content[data-index="0"]');
    const spaceTwo = document.querySelector('.content[data-index="1"]');
    const spaceThree = document.querySelector('.content[data-index="2"]');
    const spaceFour = document.querySelector('.content[data-index="3"]');
    const spaceFive = document.querySelector('.content[data-index="4"]');
    const spaceSix = document.querySelector('.content[data-index="5"]');
    const spaceSeven = document.querySelector('.content[data-index="6"]');
    const spaceEight = document.querySelector('.content[data-index="7"]');
    const spaceNine = document.querySelector('.content[data-index="8"]');
    spaceOne.innerHTML = gameBoard[0];
    spaceTwo.innerHTML = gameBoard[1];
    spaceThree.innerHTML = gameBoard[2];
    spaceFour.innerHTML = gameBoard[3];
    spaceFive.innerHTML = gameBoard[4];
    spaceSix.innerHTML = gameBoard[5];
    spaceSeven.innerHTML = gameBoard[6];
    spaceEight.innerHTML = gameBoard[7];
    spaceNine.innerHTML = gameBoard[8];
}

const checkScore = (gameBoard) => {
    console.log("checkScore invoked");
    console.log(gameBoard);
    const areAllFull = gameBoard.every(item => item !== "");
    for (let i = 0; i < gameBoard.length; i++) {
        if (areAllFull) {
            console.log("It's a draw!")
            // DRAWS += 1
            reset(gameBoard)
        }
        else if (gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard[2] === "X" || gameBoard[2] === "X" && gameBoard[5] === "X" && gameBoard[8] === "X" || gameBoard[2] === "X" && gameBoard[4] === "X" && gameBoard[6] === "X" || gameBoard[1] === "X" && gameBoard[4] === "X" && gameBoard[7] === "X" || gameBoard[0] === "X" && gameBoard[3] === "X" && gameBoard[6] === "X" || gameBoard[3] === "X" && gameBoard[4] === "X" && gameBoard[5] === "X" || gameBoard[6] === "X" && gameBoard[7] === "X" && gameBoard[8] === "X" || gameBoard[0] === "X" && gameBoard[4] === "X" && gameBoard[8] === "X") {
            console.log("X wins!");
            // PLAYER X WINS += 1
            reset(gameBoard)
        }
        else if (gameBoard[0] === "O" && gameBoard[1] === "O" && gameBoard[2] === "O" || gameBoard[2] === "O" && gameBoard[5] === "O" && gameBoard[8] === "O" || gameBoard[2] === "O" && gameBoard[4] === "O" && gameBoard[6] === "O" || gameBoard[1] === "O" && gameBoard[4] === "O" && gameBoard[7] === "O" || gameBoard[0] === "O" && gameBoard[3] === "O" && gameBoard[6] === "O" || gameBoard[3] === "O" && gameBoard[4] === "O" && gameBoard[5] === "O" || gameBoard[6] === "O" && gameBoard[7] === "O" && gameBoard[8] === "O" || gameBoard[0] === "O" && gameBoard[4] === "O" && gameBoard[8] === "O") {
            console.log("O wins!");
            // PLAYER O WINS += 1
            reset(gameBoard)
        }
        else {
            console.log("breaking!");
            break
        }
    }
};


function addMark(gameBoard, space) {
    console.log("addMark invoked")
    console.log(gameBoard)
    const areAllStringsEmpty = gameBoard.every(str => str.trim() === "")
    const X = "X"
    const O = "O"
    const Xs = gameBoard.filter(str => str === X).length
    const Os = gameBoard.filter(str => str === O).length
    console.log(Xs)
    console.log(Os)
        if (areAllStringsEmpty) {
            space.children[0].innerHTML = "X"
            let spaceIndex = space.firstChild.attributes[1].value
            gameBoard.splice(spaceIndex, 1, "X")
            console.log(gameBoard)
        } else if (Xs === Os) {
            space.children[0].innerHTML = "X"
            let spaceIndex = space.firstChild.attributes[1].value
            gameBoard.splice(spaceIndex, 1, "X")
            console.log(gameBoard)
        } else if (Os < Xs) {
            space.children[0].innerHTML = "O"
            let spaceIndex = space.firstChild.attributes[1].value
            gameBoard.splice(spaceIndex, 1, "O")
            console.log(gameBoard)
        }
}

function reset(gameBoard) {
    for (let i = 0; i < gameBoard.length; i++) {
        if (typeof gameBoard[i] === "string") {
            gameBoard[i] = "";
        }
    }
    console.log(gameBoard)
    console.log("RESET")
    displayBoard()
}

spaceOne.onclick = () => { addMark(gameBoard, spaceOne), checkScore(gameBoard) };
spaceTwo.onclick = () => { addMark(gameBoard, spaceTwo), checkScore(gameBoard) };
spaceThree.onclick = () => { addMark(gameBoard, spaceThree), checkScore(gameBoard) };
spaceFour.onclick = () => { addMark(gameBoard, spaceFour), checkScore(gameBoard) };
spaceFive.onclick = () => { addMark(gameBoard, spaceFive), checkScore(gameBoard) };
spaceSix.onclick = () => { addMark(gameBoard, spaceSix), checkScore(gameBoard) };
spaceSeven.onclick = () => { addMark(gameBoard, spaceSeven), checkScore(gameBoard) };
spaceEight.onclick = () => { addMark(gameBoard, spaceEight), checkScore(gameBoard) };
spaceNine.onclick = () => { addMark(gameBoard, spaceNine), checkScore(gameBoard) };

const Player = role => {
    let playerRole = role
    return {playerRole}
}

const playerX = Player("X")
const playerO = Player("O")

console.log(playerX.playerRole)
console.log(playerO.playerRole)

displayBoard()

