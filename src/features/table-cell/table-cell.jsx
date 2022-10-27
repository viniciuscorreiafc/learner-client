import React from 'react';
import CellPiece from '../cell-piece/cell-piece';

function TableCell({ cellPiece }) {
  return (
    <div className="flex justify-center items-center border-solid w-full h-full bg-slate-900">
      <CellPiece cellPiece={cellPiece} />
    </div>
  );
}

export default TableCell;
