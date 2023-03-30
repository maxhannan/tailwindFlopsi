import Dialog from "@mui/material/Dialog";

import Slide from "@mui/material/Slide";
import type { TransitionProps } from "@mui/material/transitions";

import { forwardRef } from "react";
import type { ReactNode } from "react";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface DialogProps {
  title: string;
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
}
export default function FullScreenDialog({
  title,
  open,
  handleClose,
  children,
}: DialogProps) {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      PaperProps={{ className: "bg-gray-100 dark:bg-neutral-900  " }}
    >
      <nav className="bg-gray-50 px-4 h-16 dark:bg-neutral-800  fixed w-full z-50 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap h-16 items-center justify-between mx-auto">
          <h1 className="text-xl text-blue-600 dark:text-blue-400 ">
            Add a Recipe
          </h1>
          <button
            type="button"
            onClick={handleClose}
            className=" h-10 transition duration-200 bg-gray-200 bg-opacity-60 dark:bg-neutral-700 shadow-inner text-neutral-600  active:bg-blue-700 active:text-gray-50 active:scale-110 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs p-2.5 text-center inline-flex items-center  dark:border-blue-400 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span className=" ml-1">Close</span>
          </button>
        </div>
      </nav>
      <div className="container max-w-lg mx-auto mt-20">{children}</div>
    </Dialog>
  );
}
