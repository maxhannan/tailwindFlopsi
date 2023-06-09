import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Chip from "./Chip";

const Allergens = [
  "Gluten",
  "Not Vegetarian",
  "Not Vegan",
  "Dairy",
  "Eggs",
  "Fish",
  "Shellfish",
  "Tree nuts",
  "Peanuts",
  "Soy",
  "Not Halal",
  "Not Kosher",
];

export default function SelectBox() {
  const [selected, setSelected] = useState([]);

  return (
    <div className="w-full z-30">
      <Listbox value={selected} onChange={setSelected} multiple>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default border py-2 border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-neutral-800 pl-3 pr-10 text-left  text-lg focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 ">
            <span className="flex flex-wrap gap-2 items-center ">
              {selected.length > 0 ? (
                selected.map((person) => <Chip key={person} content={person} />)
              ) : (
                <p className=" m-0.5 text-neutral-500  text-md">
                  Select Allergens
                </p>
              )}
            </span>

            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter="transition ease-in duration-300"
            enterFrom="opacity-0  "
            enterTo="opacity-100 "
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className=" z-40 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-700 py-1 text-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
              {Allergens.map((allergen, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? "dark:bg-gray-800 bg-blue-300 text-blue-900 dark:text-blue-400"
                        : "text-gray-900 dark:text-gray-50"
                    }`
                  }
                  value={allergen}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {allergen}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
