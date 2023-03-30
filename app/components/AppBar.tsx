import { Transition } from "@headlessui/react";
import { useLocation } from "@remix-run/react";
import { Fragment, useState } from "react";

const AppBar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation().pathname;
  return (
    <nav className="bg-gray-50 px-4 py-2 dark:bg-neutral-800  fixed w-full z-50 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <h1 className="text-xl text-blue-600 dark:text-blue-400 ">Recipes</h1>
        <div className="flex justify-between ">
          <Transition
            show={location === "/app/recipes"}
            enter="transition-all transform ease-linear  duration-100"
            enterFrom=" opacity-0 -translate-y-full "
            enterTo=" opacity-100 translate-y-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <button
              type="button"
              className=" h-10 transition duration-200  text-blue-700 border border-blue-700 active:bg-blue-700 active:text-gray-50 active:scale-110 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-400 dark:text-blue-400 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span className=" ml-1">Add a Recipe</span>
              <span className="sr-only">Icon description</span>
            </button>
          </Transition>
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className=" h-10 w-10 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-400 dark:text-blue-400 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>

            <span className="sr-only">Icon description</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
