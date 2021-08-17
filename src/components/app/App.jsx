import React, { useState, useEffect } from 'react';
import { setUndo, setRecord, setRedo } from '../../state/actions';
import { useDispatch, useSelector } from '../../state/ReduxProvider';
import { selectAfter, selectBefore, selectCurrent } from '../../state/selectors';

const useRecord = (init) => {
  const before = useSelector(selectBefore);
  const current = useSelector(selectCurrent);
  const after = useSelector(selectAfter);
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(getBefore(before));
    dispatch(getCurrent(current));
    dispatch(getAfter(after));
  }, []);

  // const [before, setBefore] = useState([]);
  // const [current, setCurrent] = useState(init);
  // const [after, setAfter] = useState([]);

  const undo = () => {
  //   setAfter((after) => [current, ...after]);
  //   setCurrent(before[before.length - 1]);
  //   setBefore((before) => before.slice(0, -1));
    dispatch(setUndo(before));
  };

  const redo = () => {
  //   setBefore((before) => [...before, current]);
  //   setCurrent(after[0]);
  //   setAfter((after) => after.slice(1));
    dispatch(setRedo(after))
  };

  const record = (val) => {
    // setBefore((before) => [...before, current]);
    // setCurrent(val);
    dispatch(setRecord(val));
  }
  };

  return {
    undo,
    record,
    redo,
    current,
  };
};

function App() {
  // const before = useSelector(selectBefore);
  const current = useSelector(selectCurrent);
  // const after = useSelector(selectAfter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRecord('#fac6e5'));
  });

  const undo = () => {
    dispatch(setUndo);
  };

  const redo = () => {
    dispatch(setRedo);
  };

  const record = (current) => {
    dispatch(setRecord(current));
  };

  return (
    <>
      <button data-testid="undoButton" onClick={undo}>undo</button>
      <button data-testid="redoButton" onClick={redo}>redo</button>
      <input data-testid="colorInput"
        type="color"
        value={current}
        onChange={({ target }) => record(target.value)}
      />
      <div data-testid="display"
        style={{ backgroundColor: current, width: '10rem', height: '10rem' }}
      ></div>
    </>
  );
}

export default App;
