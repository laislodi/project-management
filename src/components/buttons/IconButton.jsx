import { useRef } from "react";
import Button from "./Button.jsx";
import OptionModal from "../modal/OptionModal.jsx"
import { H2 } from "../text/Headers.jsx";
import Paragraph from "../text/Paragraph.jsx";

export function IconButton({ children, ...props }) {
  let style = "min-w-8 size-12 m-1 ";
  if (props.className) {
    style += props.className;
  }
  return (
    <Button
        title={props.helpText}
        onClick={props.onClick}
        className={style}>
      {children}
    </Button>
  );
};

export function CloseIconButton({ onClose }) {
  const style = `bg-stone-600 text-stone-300 hover:bg-stone-700
            dark:bg-stone-500 dark:text-stone-300 dark:hover:bg-stone-600  `;

  return (
    <IconButton
        helpText="Cancel"
        onClick={onClose}
        className={style}
    >
      <i className="fa fa-times" aria-hidden="true"></i>
    </IconButton>
  );
};

export function ConfirmIconButton({ onConfirm }) {
  const style = `bg-slate-300 text-stone-700 border-2 border-slate-400
            hover:bg-slate-200 hover:text-stone-900 hover:border-stone-700
            dark:bg-stone-700 dark:text-stone-300 dark:border-2 dark:border-slate-400
            dark:hover:bg-stone-800 dark:hover:text-stone-300 `;

  return (
    <IconButton
        helpText="Confirm"
        onClick={onConfirm}
        className={style}
    >
      <i className="fa fa-check" aria-hidden="true"></i>
    </IconButton>
  );
};

export function PlusIconButton({ onAdd }) {
  const style = `bg-slate-300 text-stone-700 border-2 border-slate-400
            hover:bg-slate-200 hover:text-stone-900 hover:border-stone-700
            dark:bg-stone-700 dark:text-stone-300 dark:border-2 dark:border-slate-400
            dark:hover:bg-stone-800 dark:hover:text-stone-300 `;

  return (
    <IconButton
        helpText="Add"
        onClick={onAdd}
        className={style}
    >
      <i className="fa fa-plus" aria-hidden="true"></i>
    </IconButton>
  );
};

export function DeleteIconButton({ onDelete, helpText }) {
  const style = `bg-red-500 text-stone-100 hover:bg-red-600
                dark:bg-red-700 dark:text-stone-300 dark:hover:bg-red-800 `;
  const modal = useRef();

  function handleDelete() {
    modal.current.open();
  }

  return (
    <>
      <OptionModal ref={modal} positive="Delete" negative="Back" onPositive={onDelete}>
        <H2>Are you sure you want to delete this project?</H2>
        <Paragraph>Once you delete this project, you can't get it back!</Paragraph>
      </OptionModal>
      <IconButton
          helpText={helpText ?? "Delete"}
          onClick={handleDelete}
          className={style}
      >
        <i className="fa fa-trash" aria-hidden="true"></i>
      </IconButton>
    </>
  );
};

