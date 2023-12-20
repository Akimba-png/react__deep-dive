import { createPortal } from 'react-dom';

function CreatePortalNode(): JSX.Element {
  return (
    <div style={{outline: "1px solid black"}}>
      <h2>Create Portal</h2>
      <p>this paragraph is inside element</p>
      {
        createPortal(
          <h3>
            this text is rendered outside of element where it is placed,
            but it is actually situated inside of it and uses it props & events
          </h3>,
          document.body
        )
      }
    </div>
  );
}

export { CreatePortalNode };
