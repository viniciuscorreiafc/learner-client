import axios from 'axios';
import { cellPieceType, LEARNER_API } from '../../shared/constants';

const getGameAfterComputerMove = async (gameId) => {
  const response = await axios.get(`${LEARNER_API}/game/${gameId}/next-move`);
  return response.data?.newGame;
};

const getNewGameFromMove = (gameId, fromCellId, toCellId) => {
  const newGameId = gameId.split('');
  const fromPiece = newGameId[fromCellId];

  newGameId[fromCellId] = cellPieceType.blank;
  newGameId[toCellId] = fromPiece;

  return newGameId.join('');
};

const getRowFromCellId = (cellId) => parseInt(cellId / 3, 10);

const getPossibleCellIdUserMoves = (gameId, fromCellId) => {
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

const getPossibleCellIdComputerMoves = (gameId, cellId) => {
  const row = getRowFromCellId(cellId);
  const gameIdList = gameId.split('');

  const diagonalLeftCellId = cellId + 2;
  const diagonalLeftPiece = gameIdList[diagonalLeftCellId];
  const frontCellId = cellId + 3;
  const frontPiece = gameIdList[frontCellId];
  const diagonalRightCellId = cellId + 4;
  const diagonalRightPiece = gameIdList[diagonalRightCellId];

  const moves = [];
  if (diagonalLeftPiece === cellPieceType.user && row + 1 === getRowFromCellId(diagonalLeftCellId)) {
    moves.push(diagonalLeftCellId);
  }
  if (frontPiece === cellPieceType.blank && row + 1 === getRowFromCellId(frontCellId)) {
    moves.push(frontCellId);
  }
  if (diagonalRightPiece === cellPieceType.user && row + 1 === getRowFromCellId(diagonalRightCellId)) {
    moves.push(diagonalRightCellId);
  }

  return moves;
};

const isUserInTheEndLine = (gameId) => gameId[0] === cellPieceType.user || gameId[0] === cellPieceType.user || gameId[0] === cellPieceType.user;

const didUserAteAllComputerPieces = (gameId) => {
  const splittedGameId = gameId.split('');

  return splittedGameId.every((piece) => piece !== cellPieceType.computer);
};

const didUserLetComputerMoveless = (gameId) => {
  const splittedGameId = gameId.split('');

  return splittedGameId.every((piece) => piece !== cellPieceType.computer || getPossibleCellIdComputerMoves.length === 0);
};

const didUserwin = (gameId) => {
  if (isUserInTheEndLine(gameId)) return true;
  if (didUserAteAllComputerPieces(gameId)) return true;
  if (didUserLetComputerMoveless(gameId)) return true;

  return false;
};

const isComputerInTheEndLine = (gameId) => gameId[0] === cellPieceType.user || gameId[0] === cellPieceType.user || gameId[0] === cellPieceType.user;

const didComputerAteAllUserPieces = (gameId) => {
  const splittedGameId = gameId.split('');

  return splittedGameId.every((piece) => piece !== cellPieceType.computer);
};

const didComputerLetUserMoveless = (gameId) => {
  const splittedGameId = gameId.split('');

  return splittedGameId.every((piece) => piece !== cellPieceType.computer || getPossibleCellIdComputerMoves.length === 0);
};

const didComputerwin = (gameId) => {
  if (isComputerInTheEndLine(gameId)) return true;
  if (didComputerAteAllUserPieces(gameId)) return true;
  if (didComputerLetUserMoveless(gameId)) return true;

  return false;
};

export default {
  getPossibleCellIdUserMoves,
  getNewGameFromMove,
  didUserwin,
  didComputerwin,
  getGameAfterComputerMove,
};
