import { useSyncExternalStore } from 'react';

// Данный cb будет подставлен реактом автоматически при вызове useSyncExternalStore
// В момент наступления события, вызовется данный cb и перерисует компонент
function subscribe(cb: () => void) {
  window.addEventListener('online', cb);
  window.addEventListener('offline', cb);
  return () => {
    window.removeEventListener('online', cb);
    window.removeEventListener('offline', cb);
  };
}

// Возвращаемое из хука значение, по изменению которого будет перерисовываться
// компонент
function getSnapshot() {
  return window.navigator.onLine;
}

export function UseSyncExternalStoreWindowApi(): JSX.Element {
  const data = useSyncExternalStore(subscribe, getSnapshot);
  return (
    <>
      <h2>useSyncExternalStore window api</h2>
      <p>status is {data ? 'online' : 'offline'}</p>
    </>
  );
}
