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

function transpose(a) {
  return Object.keys(a[0]).map(function (c) {
    return a.map(function (r) { return r[c]; });
  });
}


function checkForBingo(bingoCard, drawnNumbers) {

  // calculate matrix demension
  let matrixDem = 5;

  const matrixArray = [];
  let transArray = [];
  while (bingoCard.length) matrixArray.push(bingoCard.splice(0, matrixDem));

  transArray = transpose(matrixArray);

  if (drawnNumbers.length == 4) {
    drawnNumbers.splice(2, 0, "Free");


    // check diagonal
    let findFlag = true;
    for (let i = 0; i < 5; i++) {
      if (drawnNumbers[i] != matrixArray[i][i]) {
        findFlag = false
        break;
      }
    }
    if (!findFlag) return true
    else return false
  }
  // check row && col
  index = matrixArray.indexOf(drawnNumbers);
  if (index > -1)
    findFlag = true;
  else {
    index = transArray.indexOf(drawnNumbers);
  }
  if (index > -1)
    findFlag = tru;
  else
    findFlag = false;
  return findFlag;
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
