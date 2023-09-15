/**
 * B-I-N-G-O
 *
 * A Bingo card contain 25 squares arranged in a 5x5 grid (five columns
 * and five rows). Each space in the grid contains a number between 1
 * and 75. The center space is marked "FREE" and is automatically filled.
 *
 * As the game is played, numbers are drawn. If the player's card has
 * that number, that space on the grid is filled.
 *
 * A player wins BINGO by completing a row, column, or diagonal of filled
 * spaces.
 *
 * Your job is to complete the function that takes a bingo card and array
 * of drawn numbers and return 'true' if that card has achieved a win.
 *
 * A bingo card will be 25 element array. With the string 'FREE' as the
 * center element (index 12). Although developers are unscrupulous, they
 * will pass valid data to your function.
 */

function checkForBingo (bingoCard, drawnNumbers) {

  // Create the bingo board
  const bingoBoard = [[], [], [], [], []];

  for (let i = 0, len = bingoCard.length; i < len; i++) {
    let row = Math.floor(i / 5);
    let col = i % 5;

    // If the number is one of the drawnNumbers, replace the number with 0
    if (drawnNumbers.includes(bingoCard[i])) {
      bingoBoard[row][col] = 0;
    } else {
      bingoBoard[row][col] = bingoCard[i];
    }
  }
  // FREE should always be marked as 0
  bingoBoard[2][2] = 0

  // Check diagonally
  let diagonalCount = 0;
  for (let i = 0; i < bingoBoard.length; i++) {
    if (bingoBoard[i][i] === 0) {
      diagonalCount++;
    }
    if (diagonalCount === 5) {
      return true
    }
  }

  // Check reversed diagonally
  let reversedDiagonalCount = 0;
  for (let i = 0, j = 4; i < bingoBoard.length; i++, j--) {
    if (bingoBoard[i][j] === 0) {
      reversedDiagonalCount++;
    }
    if (reversedDiagonalCount === 5) {
      return true;
    }
  }

  // check each rows
  let rowsCount = 0;
  for (let i = 0; i < bingoBoard.length; i++) {
    for (let j = 0; j < bingoBoard.length; j++) {
      if (bingoBoard[i][j] === 0) {
        rowsCount++;
      } else {
        rowsCount = 0;
        break;
      }
      if (rowsCount === 5) {
        return true;
      }
    }
  }

  // check each columns
  let colsCount = 0;
  for (let i = 0; i < bingoBoard.length; i++) {
    for (let j = 0; j < bingoBoard.length; j++) {
      if (bingoBoard[j][i] === 0) {
        colsCount++;
      } else {
        colsCount = 0;
        break;
      }
      if (colsCount === 5) {
        return true;
      }
    }
  }

  return false;
}

module.exports = checkForBingo;

// here are some samples

// this should return true with diagonal + free
checkForBingo(
  [
    8, 29, 35, 54, 65,
    13, 24, 44, 48, 67,
    9, 21, 'FREE', 59, 63,
    7, 19, 34, 53, 61,
    1, 20, 33, 46, 72
  ],
  [
    8, 24, 53, 72
  ]
);

// this should return false
checkForBingo(
  [
   8, 29, 35, 54, 65,
   13, 24, 44, 48, 67,
   9, 21, 'FREE', 59, 63,
   7, 19, 34, 53, 61,
   1, 20, 33, 46, 72
  ],
  [
    1, 33, 53, 65, 29, 75
  ]
);
