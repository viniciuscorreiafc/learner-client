import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import TableCell from '../table-cell/table-cell';

function Table({ gameId }) {
  return (
    <div className="flex flex-col w-300 h-300 border-solid border-8 bg-slate-500 border-neutral-900">
      <div className="flex flex-row w-full h-1/3">
        <div className="h-full w-1/3 flex justify-center items-center p-2">
          <TableCell cellPiece={gameId[0]} />
        </div>
        <div className="h-full w-1/3 flex justify-center items-center p-2">
          <TableCell cellPiece={gameId[1]} />
        </div>
        <div className="h-full w-1/3 flex justify-center items-center p-2">
          <TableCell cellPiece={gameId[2]} />
        </div>
      </div>

      <div className="flex flex-row w-full h-1/3">
        <div className="h-full w-1/3 flex justify-center items-center p-2">
          <TableCell cellPiece={gameId[3]} />
        </div>
        <div className="h-full w-1/3 flex justify-center items-center p-2">
          <TableCell cellPiece={gameId[4]} />
        </div>
        <div className="h-full w-1/3 flex justify-center items-center p-2">
          <TableCell cellPiece={gameId[5]} />
        </div>
      </div>

      <div className="flex flex-row w-full h-1/3">
        <div className="h-full w-1/3 flex justify-center items-center p-2">
          <TableCell cellPiece={gameId[6]} />
        </div>
        <div className="h-full w-1/3 flex justify-center items-center p-2">
          <TableCell cellPiece={gameId[7]} />
        </div>
        <div className="h-full w-1/3 flex justify-center items-center p-2">
          <TableCell cellPiece={gameId[8]} />
        </div>
      </div>
    </div>
  );
}

export default Table;
