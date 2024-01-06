import { useState, useEffect, useRef } from 'react';

// Если быстро кликнуть несколько раз подряд на кнопку, в консоли будет
// поочерёдно выводится значение count, которое будет равняться значению
// в своём рендере т.е. 1, 2, 3, 4, 5...
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

// При быстром клике на кнопку в консоле useEffectа будет отображаться
// последнее значение count. Т.е. useRef мутирующее значение и для всех
// рендеров шарится общее значение, которое доступно между рендерами
// К примеру, если быстро кликнуть 5 раз на кнопку, console выведет пять раз
// значение 5
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

