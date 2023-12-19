import { ForwardRefForm } from './raect-basics/forwardRef/forwardRefForm';
import { ForwardRefPlayer } from './raect-basics/forwardRef/forwardRefPlayer';

function App(): JSX.Element {
  return (
    <>
      <h1>Hello world!</h1>
      <ForwardRefForm />
      <ForwardRefPlayer/>
    </>
  )
}

export { App };
