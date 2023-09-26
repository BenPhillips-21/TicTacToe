const gameBoard = ["", "", "", "", "", "", "", "", ""]

let isXTurn = true 

function updateScoresX() {
    let playerXScore = document.getElementById("playerXWins")
    playerXScore.firstChild.lastChild.innerHTML = Math.round(playerX.playerWins)
}

function updateScoresO() {
    let playerOScore = document.getElementById("playerOWins")
    playerOScore.firstChild.lastChild.innerHTML = Math.round(playerO.playerWins)
}

function displayBoard() {
    for (let i = 0; i < gameBoard.length; i++) {
        const space = document.querySelector(`.content[data-index="${i}"]`)
        space.innerHTML = gameBoard[i]
    }
}

const checkScore = (gameBoard) => {
    const areAllFull = gameBoard.every(item => item !== "")
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard[2] === "X" || gameBoard[2] === "X" && gameBoard[5] === "X" && gameBoard[8] === "X" || gameBoard[2] === "X" && gameBoard[4] === "X" && gameBoard[6] === "X" || gameBoard[1] === "X" && gameBoard[4] === "X" && gameBoard[7] === "X" || gameBoard[0] === "X" && gameBoard[3] === "X" && gameBoard[6] === "X" || gameBoard[3] === "X" && gameBoard[4] === "X" && gameBoard[5] === "X" || gameBoard[6] === "X" && gameBoard[7] === "X" && gameBoard[8] === "X" || gameBoard[0] === "X" && gameBoard[4] === "X" && gameBoard[8] === "X") {
            playerX.playerWins += 1/9
            var heading = document.getElementById("hiddenHeading")
            heading.style.display = "block"
            var overlay = document.getElementById("overlay")
            overlay.style.display = "block"
            setTimeout(function() {
                heading.style.display = "none"
                overlay.style.display = "none"
                toggleTurnHeading()
                updateScoresX() 
                reset(gameBoard)
            }, 2000)
            toggleTurnHeadingOff()           
        } else if (gameBoard[0] === "O" && gameBoard[1] === "O" && gameBoard[2] === "O" || gameBoard[2] === "O" && gameBoard[5] === "O" && gameBoard[8] === "O" || gameBoard[2] === "O" && gameBoard[4] === "O" && gameBoard[6] === "O" || gameBoard[1] === "O" && gameBoard[4] === "O" && gameBoard[7] === "O" || gameBoard[0] === "O" && gameBoard[3] === "O" && gameBoard[6] === "O" || gameBoard[3] === "O" && gameBoard[4] === "O" && gameBoard[5] === "O" || gameBoard[6] === "O" && gameBoard[7] === "O" && gameBoard[8] === "O" || gameBoard[0] === "O" && gameBoard[4] === "O" && gameBoard[8] === "O") {
            playerO.playerWins += 1/9
            var heading = document.getElementById("hiddenHeadingTwo")
            heading.style.display = "block"
            var overlay = document.getElementById("overlay")
            overlay.style.display = "block"
            setTimeout(function() {
                heading.style.display = "none"
                overlay.style.display = "none"
                toggleTurnHeading()
                updateScoresO()
                reset(gameBoard)
            }, 2000)
            toggleTurnHeadingOff()
        } else if (areAllFull) {
            var heading = document.getElementById("hiddenHeadingThree")
            heading.style.display = "block"
            var overlay = document.getElementById("overlay")
            overlay.style.display = "block"
            setTimeout(function() {
                heading.style.display = "none"
                overlay.style.display = "none"
                toggleTurnHeading()
                reset(gameBoard)
            }, 2000)
            toggleTurnHeadingOff()
        }
        else {
            break
        }
    }
}

function addMark(gameBoard, space) {
        if (isXTurn) {
            space.children[0].innerHTML = "X"
            let spaceIndex = space.firstChild.attributes[1].value
            gameBoard.splice(spaceIndex, 1, "X")
            isXTurn = !isXTurn
            toggleTurnHeading()
        } else {
            space.children[0].innerHTML = "O"
            let spaceIndex = space.firstChild.attributes[1].value
            gameBoard.splice(spaceIndex, 1, "O")
            isXTurn = !isXTurn
            toggleTurnHeading()
        }
}

function reset(gameBoard) { 
    for (let i = 0; i < gameBoard.length; i++) {
        if (typeof gameBoard[i] === "string") {
            gameBoard[i] = ""
        }
    }
    displayBoard()
}

const container = document.getElementById("container")
container.addEventListener("click", function(event) {
    const target = event.target
    
    if (target.classList.contains("clickable-div")) {
        addMark(gameBoard, target)
        checkScore(gameBoard)
    }
})

resetButton.onclick = () => { reset(gameBoard) }

const Player = (role, wins) => {
    let playerRole = role
    let playerWins = wins
    return {playerRole, playerWins}
}

const playerX = Player("X", 0)
const playerO = Player("O", 0)

displayBoard()

function toggleTurnHeading() {
    const headingX = document.getElementById("hiddenHeadingFour")
    const headingO = document.getElementById("hiddenHeadingFive")

    if (isXTurn) {
        headingX.style.display = "block"
        headingO.style.display = "none"
    } else {
        headingX.style.display = "none"
        headingO.style.display = "block"
    }
}

function toggleTurnHeadingOff() { 
    const headingX = document.getElementById("hiddenHeadingFour")
    const headingO = document.getElementById("hiddenHeadingFive")
    headingO.style.display = "none"
    headingX.style.display = "none"
}

toggleTurnHeading()

