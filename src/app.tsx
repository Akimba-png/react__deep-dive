import { ForwardRefForm } from './raect-basics/forwardRef/forwardRefForm';
import { ForwardRefPlayer } from './raect-basics/forwardRef/forwardRefPlayer';
import { UseImperativeHandlePlayer } from './raect-basics/useImperativeHandle/useImperativeHandle';
import { CreatePortalNode } from './raect-basics/createPortal/portalNode';
import { CreatePortalModal } from './raect-basics/createPortal/portalModal';
import { UseEffectAssyncCounter, UseEffectRefCounter } from './raect-basics/useEffect/useEffectAssyncCounter';

function App(): JSX.Element {
  return (
    <>
      <h1>Hello world!</h1>
      <ForwardRefForm />
      <ForwardRefPlayer/>
      <UseImperativeHandlePlayer/>
      <CreatePortalNode />
      <CreatePortalModal />
      <UseEffectAssyncCounter />
      <UseEffectRefCounter />
    </>
  )
}

export { App };
