import { ForwardRefForm } from './raect-basics/forwardRef/forwardRefForm';
import { ForwardRefPlayer } from './raect-basics/forwardRef/forwardRefPlayer';
import { UseImperativeHandlePlayer } from './raect-basics/useImperativeHandle/useImperativeHandle';
import { CreatePortalNode } from './raect-basics/createPortal/portalNode';
import { CreatePortalModal } from './raect-basics/createPortal/portalModal';
import { UseEffectAssyncCounter, UseEffectRefCounter } from './raect-basics/useEffect/useEffectAssyncCounter';
import { UseDebugValue } from './raect-basics/useDebugValue/useDebugValue';
import { UseSyncExternalStoreStoreExample } from './raect-basics/useSyncExternalStore/useSyncExternalStoreStoreExm';
import { UseSyncExternalStoreWindowApi } from './raect-basics/useSyncExternalStore/useSyncExternalStoreWindowExm';
import { UseState } from './raect-basics/useState/useState';

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
      <UseDebugValue />
      <UseSyncExternalStoreStoreExample />
      <UseSyncExternalStoreWindowApi />
      <UseState />
    </>
  )
}

export { App };
