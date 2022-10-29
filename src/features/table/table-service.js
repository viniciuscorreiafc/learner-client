import { cellPieceType } from '../../shared/constants';

const getTableGrid = (gameId) => {
  const splittedGameId = gameId.split('');

  const firstRow = splittedGameId.splice(0, 3);
  const secondRow = splittedGameId.splice(0, 3);
  const thirdRow = splittedGameId.splice(0, 3);

  return [firstRow, secondRow, thirdRow];
};

const getCellIdFromRowAndColumn = (row, column) => row * 3 + column;

const getInitialCellStatesFromGameId = (gameId) => {
  const splittedGameId = gameId.split('');

  return splittedGameId.map((piece) => ({
    piece,
    isSelected: false,
    isHighlighted: false,
  }));
};

const getRowFromCellId = (cellId) => parseInt(cellId / 3, 10);

const getPossibleCellIdMoves = (gameId, fromCellId) => {
  const row = getRowFromCellId(fromCellId);
  const gameIdList = gameId.split('');

  const diagonalRightCellId = fromCellId - 2;
  const diagonalRightPiece = gameIdList[diagonalRightCellId];
  const frontCellId = fromCellId - 3;
  const frontPiece = gameIdList[frontCellId];
  const diagonalLeftCellId = fromCellId - 4;
  const diagonalLeftPiece = gameIdList[diagonalLeftCellId];

  const moves = [];
  if (diagonalLeftPiece === cellPieceType.computer && row - 1 === getRowFromCellId(diagonalLeftCellId)) {
    moves.push(diagonalLeftCellId);
  }
  if (frontPiece === cellPieceType.blank && row - 1 === getRowFromCellId(frontCellId)) {
    moves.push(frontCellId);
  }
  if (diagonalRightPiece === cellPieceType.computer && row - 1 === getRowFromCellId(diagonalRightCellId)) {
    moves.push(diagonalRightCellId);
  }

  return moves;
};

export default {
  getTableGrid, getCellIdFromRowAndColumn, getInitialCellStatesFromGameId, getRowFromCellId, getPossibleCellIdMoves,
};
