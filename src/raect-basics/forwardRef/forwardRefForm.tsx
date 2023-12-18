import { forwardRef, useRef } from 'react';

// дочерний компонент
const Input = forwardRef<HTMLInputElement>(function Input(_props, ref) {
  return (
    <label>
      you can type some text here
      <input type='text' ref={ref} />
    </label>
  );
});

// родительский компонент
export function ForwardRefForm(): JSX.Element {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const handleClick = () => inputRef.current!.focus();
  return (
    <form action="" method="POST">
      <h2>Форма для отправки инпутов</h2>
      <Input ref={inputRef} />
      <button onClick={handleClick} type="button">click to focus</button>
    </form>
  );
}
