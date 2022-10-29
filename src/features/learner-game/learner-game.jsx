import React, { useState } from 'react';
import Table from '../table/table';
import LearnerGameService from './learner-game-service';
import { players } from '../../shared/constants';

function LearnerGame() {
  const [gameId, setGameId] = useState('202020111');
  const [isMoveDisabled, setIsMoveDisabled] = useState(false);
  const [, setWinner] = useState(null);

  const handleMakeMove = async (fromCellId, toCellId) => {
    setIsMoveDisabled(true);

    const gameIdAfterUserMove = LearnerGameService.getNewGameFromMove(gameId, fromCellId, toCellId);

    if (LearnerGameService.didUserwin(gameIdAfterUserMove)) {
      setWinner(players.user);
    }

    setGameId(gameIdAfterUserMove);

    setIsMoveDisabled(false);

    const nextGame = await LearnerGameService.getGameAfterComputerMove(gameIdAfterUserMove);

    // eslint-disable-next-line no-promise-executor-return
    await (new Promise((resolve) => setTimeout(resolve, 1000)));

    if (nextGame?.length === 9) {
      setGameId(nextGame);
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-slate-300 ">
      <Table gameId={gameId} makeMove={handleMakeMove} isMoveDisabled={isMoveDisabled} />
    </div>
  );
}

export default LearnerGame;
