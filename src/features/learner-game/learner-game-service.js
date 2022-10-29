import { cellPieceType } from '../../shared/constants';

const getNewGameFromMove = (gameId, fromCellId, toCellId) => {
  const newGameId = gameId.split('');
  const fromPiece = newGameId[fromCellId];

  newGameId[fromCellId] = cellPieceType.blank;
  newGameId[toCellId] = fromPiece;

  return newGameId.join('');
};

const isUserInTheEndLine = (gameId) => {
  const newGameId = gameId.split('');
  const fromPiece = newGameId[fromCellId];

  newGameId[fromCellId] = cellPieceType.blank;
  newGameId[toCellId] = fromPiece;

  return newGameId.join('');
};

const didUserwin = (gameId) => {
  if (isUserInTheEndLine(gameId)) return true;
  if (didUserAteAllComputerPieces(gameId)) return true;
  if (didUserLetComputerMoveless(gameId)) return true;

  return false;
};

export default {
  getNewGameFromMove,
};
