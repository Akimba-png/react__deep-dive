import { useState } from 'react';

export function UseState(): JSX.Element {
  const [state, setState] = useState([0]);
  console.log('component')
  return (
    <>
      <h2>Use State</h2>
      <p>current state is {state}</p>
      <button type="button" onClick={() => {
        setState([0])
        console.log(state);
      }}>refresh state</button>
    </>
  );
}
