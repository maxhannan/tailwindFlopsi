import { Transition } from "@headlessui/react";
import { MenuItem, Select } from "@mui/material";
import { useState } from "react";
import AppBar from "~/components/AppBar";
import { BottomNav } from "~/components/BottomNav";
import CheckBoxGroup from "~/components/CheckBoxGroup";
import RecipeSummary from "~/components/RecipeSummary";
import SearchBar from "~/components/SearchBar";

import SelectBox from "~/components/SelectBox";

export default function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-screen container mx-auto max-w-3xl py-20 px-3">
      <AppBar />
      <Transition
        appear
        show
        enter="transition ease-in duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <div className="grid grid-flow-row auto-rows-max gap-y-2 pb-24 ">
          <Transition
            show={open}
            className=" z-40 grid grid-cols-2 gap-2 mb-1"
            enter="transition-all  ease-in duration-500 overflow-hidden"
            enterFrom="transform opacity-0 max-h-0"
            enterTo="transform opacity-100 max-h-96"
            leave="transition-all ease-out duration-500 overflow-hidden"
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
                className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
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
                className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
              >
                Default checkbox
              </label>
            </div>
            <div className=" col-span-2">
              <SelectBox />
            </div>
          </Transition>
          <div className=" flex justify-between space-x-2 ">
            <SearchBar />
            <button className="grow-2" onClick={() => setOpen(!open)}>
              <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-900 dark:hover:bg-gray-800 hover:bg-gray-200 group">
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
              </div>
            </button>
          </div>

          <div className="grid grid-flow-row auto-rows-max gap-y-2 pb-24 mt-1">
            <RecipeSummary />
            <RecipeSummary />
            <RecipeSummary />
            <RecipeSummary />
            <RecipeSummary />
            <RecipeSummary />
            <RecipeSummary />
            <RecipeSummary />
            <RecipeSummary />
            <RecipeSummary />
            <RecipeSummary />
            <RecipeSummary />
            <RecipeSummary />
            <RecipeSummary />
            <RecipeSummary />
            <RecipeSummary />
          </div>
        </div>
      </Transition>
      <BottomNav />
    </div>
  );
}
