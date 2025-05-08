import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import SecondaryButton from "../buttons/SecondaryButton.jsx";

function Modal({ open, handleClose, children }) {
  const dialog = useRef();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    if (open) {
      dialog.current.showModal();
      window.addEventListener('keydown', handleKeyDown);
    } else {
      dialog.current.close();
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, handleClose]);
  
  return createPortal(
    <dialog
        ref={dialog}
        className={`backdrop:bg-stone-900/80 p-4 rounded-md shadow-md
          bg-slate-200 text-slate-800
          dark:bg-slate-700 dark:text-slate-100`}
    >
      {children}
      <form method="dialog" className="mt-4 text-center">
        <SecondaryButton onClick={handleClose}>Close</SecondaryButton>
      </form>
    </dialog>,
    document.getElementById("modal-root") ?? document.body
  );
};

export default Modal;
