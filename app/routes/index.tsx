import { Transition } from "@headlessui/react";
import { MenuItem, Select } from "@mui/material";
import AppBar from "~/components/AppBar";
import { BottomNav } from "~/components/BottomNav";
import RecipeSummary from "~/components/RecipeSummary";
import SearchBar from "~/components/SearchBar";

import SelectBox from "~/components/SelectBox";

export default function Index() {
  return (
    <div className="h-screen container mx-auto max-w-3xl py-20 px-3">
      <AppBar />
      <Transition
        appear
        show
        enter="transition ease-in duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <div className="grid grid-flow-row auto-rows-max gap-y-2 pb-24 ">
          <div className=" flex justify-between space-x-2 ">
            <SearchBar />
            <button className="grow-2">
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
          <SelectBox />
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
      </Transition>
      <BottomNav />
    </div>
  );
}
