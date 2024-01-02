import { useState, useDebugValue } from 'react';

const useCustomHook = (): [boolean, () => void] => {
  const [ isOnline, setOnline ] = useState(false);
  useDebugValue(isOnline ? 'online' : 'offline');
  const onlineHandler = () => {
    setOnline(p => !p);
  };
  return [ isOnline, onlineHandler ];
};

export function UseDebugValue(): JSX.Element {
  const [isOnline, onlineHandler] = useCustomHook();
  return (
    <>
      <h2>use debug value</h2>
      <p>online is {isOnline ? 'true' : 'false'}</p>
      <button type='button' onClick={onlineHandler}>change value</button>
    </>
  );
}
