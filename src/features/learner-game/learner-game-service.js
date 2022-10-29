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

// const isUserInTheEndLine = (gameId) => {
//   const newGameId = gameId.split('');
//   const fromPiece = newGameId[fromCellId];

//   newGameId[fromCellId] = cellPieceType.blank;
//   newGameId[toCellId] = fromPiece;

//   return newGameId.join('');
// };

const didUserwin = () => false;
// if (isUserInTheEndLine(gameId)) return true;
// if (didUserAteAllComputerPieces(gameId)) return true;
// if (didUserLetComputerMoveless(gameId)) return true;

// return false;

export default {
  getNewGameFromMove,
  didUserwin,
  getGameAfterComputerMove,
};
