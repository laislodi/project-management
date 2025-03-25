import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import SecondaryButton from "../buttons/SecondaryButton.jsx";
import PrimaryButton from "../buttons/PrimaryButton.jsx";

const OptionModal = forwardRef(function OptionModal({ children, positive, negative, onPositive, onNegative }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      }
    }
  });
  
  return createPortal(
    <dialog
        ref={dialog}
        className={`backdrop:bg-stone-900/80 p-4 rounded-md shadow-md
          bg-slate-200 text-slate-800
          dark:bg-slate-700 dark:text-slate-100`}
    >
      {children}
      <form method="dialog" className="mt-4 text-center">
        <PrimaryButton onClick={onPositive}>{positive}</PrimaryButton>
        <SecondaryButton onClick={onNegative}>{negative}</SecondaryButton>
      </form>
    </dialog>,
    document.getElementById("modal-root") ?? document.body
  );
});

export default OptionModal;
