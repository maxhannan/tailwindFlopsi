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
          <div className="col-span-2 flex justify-center">
            <div className="inline-flex rounded-md shadow-sm " role="group">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                Profile
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                Settings
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                Messages
              </button>
            </div>
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
