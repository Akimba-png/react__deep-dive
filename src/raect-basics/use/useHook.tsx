import { Suspense } from 'react';

function fetchMessage() {
  return new Promise<string>((resolve) => {
    resolve('promise');
  });
}

// Родительский компонент
export function UseHookPromise() {
  const messagePromise = fetchMessage();
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Suspense fallback={<p>Downloading message...</p>}>
        <Message messagePromise={messagePromise} />
      </Suspense>
    </ErrorBoundary>
  );
}

// Дочерний компонент
function Message({ messagePromise }: { messagePromise: Promise<string>}) {
  const content = use(messagePromise);
  return <p>Here is the message: {content}</p>;
}



// моковая имплементация ErrorBoundary для того чтобы реакт не ругался на
// пустой импорт. В обычной ситуации ErrorBoundary нужно имплементировать
// самому или ипользовать уже готовый пакет
type ErrorBoundaryType = {
  fallback: JSX.Element,
  children: JSX.Element,
};
function ErrorBoundary({fallback} : ErrorBoundaryType) {
  return (
    <h1>{fallback}</h1>
  );
}

// Моковая имплементация use
// Поскольку это экперементальная функция в импорте из обычного реакта она,
// на данный момент не доступна
function use(promise: Promise<string>) {
  return promise + 'text';
}
