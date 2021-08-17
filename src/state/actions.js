export const UNDO = 'UNDO';
export const REDO = 'REDO';
export const RECORD = 'RECORD';

export const setUndo = () => ({
  type: UNDO,
  // payload: before,
});

export const setRedo = () => ({
  type: REDO,
  // payload: after,
});

export const setRecord = (current) => ({
  type: RECORD,
  payload: current,
});
