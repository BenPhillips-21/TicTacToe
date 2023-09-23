const gameBoard = ["", "", "", "", "", "", "", "", ""]

const displayBoard = (() => {
    console.log(gameBoard)
    const spaceOne = document.querySelector('.content[data-index="0"]');
    const spaceTwo = document.querySelector('.content[data-index="1"]');
    const spaceThree = document.querySelector('.content[data-index="2"]');
    const spaceFour = document.querySelector('.content[data-index="3"]');
    const spaceFive = document.querySelector('.content[data-index="4"]');
    const spaceSix = document.querySelector('.content[data-index="5"]');
    const spaceSeven = document.querySelector('.content[data-index="6"]');
    const spaceEight = document.querySelector('.content[data-index="7"]');
    const spaceNine = document.querySelector('.content[data-index="8"]');
    spaceOne.innerHTML = gameBoard[0]
    spaceTwo.innerHTML = gameBoard[1]
    spaceThree.innerHTML = gameBoard[2]
    spaceFour.innerHTML = gameBoard[3]
    spaceFive.innerHTML = gameBoard[4]
    spaceSix.innerHTML = gameBoard[5]
    spaceSeven.innerHTML = gameBoard[6]
    spaceEight.innerHTML = gameBoard[7]
    spaceNine.innerHTML = gameBoard[8]
})()

function addMark(gameBoard, space) {
    console.log("addMark invoked")
    console.log(space)
    space.children[0].innerHTML = "X"
    let spaceIndex = space.firstChild.attributes[1].value
    gameBoard.splice(spaceIndex, 1, "X")
    console.log(gameBoard)
}

function Player(name) {
}

spaceOne.onclick = () => { addMark(gameBoard, spaceOne) };
spaceTwo.onclick = () => { addMark(gameBoard, spaceTwo) };
spaceThree.onclick = () => { addMark(gameBoard, spaceThree) };
spaceFour.onclick = () => { addMark(gameBoard, spaceFour) };
spaceFive.onclick = () => { addMark(gameBoard, spaceFive) };
spaceSix.onclick = () => { addMark(gameBoard, spaceSix) };
spaceSeven.onclick = () => { addMark(gameBoard, spaceSeven) };
spaceEight.onclick = () => { addMark(gameBoard, spaceEight) };
spaceNine.onclick = () => { addMark(gameBoard, spaceNine) };


const playerOne = Player()
const playerTwo = Player()

