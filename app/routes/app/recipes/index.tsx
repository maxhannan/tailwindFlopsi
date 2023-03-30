import { Transition } from "@headlessui/react";
import { useState } from "react";
import FullScreenDialog from "~/components/FullScreenDialog";

import RecipeFeed from "~/components/RecipeFeed";
import SearchBar from "~/components/SearchBar";
import SelectBox from "~/components/SelectBox";
import { useDialogContext } from "~/context/RecipeAdderCtx";

const Recipes = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const { open, handleCloseDialog } = useDialogContext();

  return (
    <Transition
      appear
      show
      enter="transition ease-in duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <div className="grid grid-flow-row auto-rows-max gap-y-2 pb-24 ease-linear ">
        <Transition
          show={openFilter}
          className=" z-40 grid grid-cols-2 gap-2 mt-3"
          enter="transition-all ease-linear duration-500 overflow-hidden"
          enterFrom="transform opacity-0 max-h-0"
          enterTo="transform opacity-100 max-h-96"
          leave="transition-all ease-linear duration-200 overflow-hidden"
          leaveFrom="transform opacity-100 max-h-96"
          leaveTo="transform opacity-0 max-h-0"
        >
          <div className=" col-span-2">
            <SelectBox />
          </div>
          <div className="flex items-center ml-2">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-md font-medium text-gray-800 dark:text-gray-300"
            >
              Default checkbox
            </label>
          </div>
          <div className="flex items-center ">
            <input
              id="default-checkbox2"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox2"
              className="ml-2 text-md font-medium text-gray-800 dark:text-gray-300"
            >
              Default checkbox
            </label>
          </div>
          <div className=" col-span-2">
            <SelectBox />
          </div>
        </Transition>
        <div className=" flex justify-between space-x-2  my-2 mt-3">
          <SearchBar />
          <button className="grow-2" onClick={() => setOpenFilter(!openFilter)}>
            <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-neutral-900 dark:hover:bg-neutral-800 hover:bg-gray-200 group">
              {!openFilter ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 group-hover:text-blue-600  group-hover:dark:text-blue-400 dark:text-gray-50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 group-hover:text-blue-600  group-hover:dark:text-blue-400 dark:text-gray-50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>
          </button>
        </div>
        <RecipeFeed />
      </div>
      <FullScreenDialog
        title={"Add A recipe"}
        open={open}
        handleClose={handleCloseDialog}
      >
        Add
      </FullScreenDialog>
    </Transition>
  );
};

export default Recipes;
