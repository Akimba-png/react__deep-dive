import { useState, useEffect, useRef } from 'react';

export function UseEffectAssyncCounter(): JSX.Element {
  const [ count, setCount ] = useState(0);
  useEffect(() => {
    setTimeout(() => console.log(`count is ${count}`), 2000);
  });
  return (
    <>
      <h2>useEffectAssyncCounter</h2>
      <h3>You clicked {count} times</h3>
      <button type='button' onClick={() => {setCount(count + 1)}}>
        count
      </button>
    </>
  );
}

export function UseEffectRefCounter(): JSX.Element {
  const [ count, setCount ] = useState(0);
  const counterRef = useRef(0);
  useEffect(() => {
    setTimeout(() => {
      console.log(counterRef.current);
    }, 2000);
  });
  return (
    <>
      <h2>useEffectRefCounter</h2>
      <h3>You clicked {count} times</h3>
      <button type='button' onClick={() => {
        counterRef.current = count + 1;
        setCount(count + 1);
      }}>
        count
      </button>
    </>
  );
}

