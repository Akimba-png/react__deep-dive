import { createPortal } from 'react-dom';
import { CSSProperties, MouseEvent, useState } from 'react';

type ModalProps = {
  children: JSX.Element,
  onModalClose: () => void,
};

const container = {
  width: '300px',
  height: '200px',
  border: '1px solid black',
  overflow: 'hidden',
};

const modalWrapper: CSSProperties = {
  position: 'absolute',
  inset: 0,
  backgroundColor: 'black',
  opacity: 0.7,
};

const modal: CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '25%',
  height: '25%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  border: '2px solid black',
  borderRadius: '5px',
  display: 'grid',
  placeContent: 'center',
};
document.body.style.position = 'relative';

export function CreatePortalModal(): JSX.Element {
  const [ isModalOpen, setModalOpen ] = useState<boolean>(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  return (
    <>
      <h2>CreatePortal Modal</h2>
      <div className="container" style={container}>
        <button type="button" onClick={handleModalOpen}>open modal</button>
        {
          isModalOpen && createPortal(
            <Modal onModalClose={handleModalClose}>
              <h3>Hello from modal</h3>
            </Modal>,
            document.body
          )
        }
      </div>
    </>
  );
}

function Modal({children, onModalClose}: ModalProps): JSX.Element {
  return (
    <div
      className="modal-wrapper" style={modalWrapper}
      onClick={onModalClose}
    >
      <div
        className="modal" style={modal}
        onClick={(evt: MouseEvent) => evt.stopPropagation()}
      >
        <h2>Modal window inside portal</h2>
        {children}
        <button type='button' onClick={onModalClose}>close modal</button>
      </div>
    </div>
  );
}
