import { Transition } from "@headlessui/react";

const RecipePage = () => {
  return (
    <Transition
      enter="transition-all transform  ease-in-out  duration-500"
      enterFrom=" opacity-0 -translate-y-full "
      enterTo=" opacity-100 translate-y-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      appear
      show={true}
    >
      <div className=" mt-4 ">
        <table className="table-auto border-collapse border w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-neutral-800 dark:text-blue-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 border w-5/12 ">
                Product name
              </th>
              <th scope="col" className="px-4 py-3 border ">
                Amount
              </th>
              <th scope="col" className="px-4 py-3 border ">
                Unit
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100 dark:bg-neutral-900 dark:border-gray-700">
              <td className="w-4 p-4 border">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900  dark:text-white border "
              >
                Celeriac, Medium Diced
              </th>
              <td className="px-4 py-4 border">3000</td>
              <td className="px-4 py-4 border">Grams</td>
            </tr>
            <tr className="bg-gray-100 dark:bg-neutral-900 dark:border-gray-700">
              <td className="w-4 p-4 border">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900  dark:text-white border "
              >
                Butter
              </th>
              <td className="px-4 py-4 border">2000</td>
              <td className="px-4 py-4 border">Grams</td>
            </tr>
            <tr className="bg-gray-100 dark:bg-neutral-900 dark:border-gray-700">
              <td className="w-4 p-4 border">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900  dark:text-white border "
              >
                Celeriac, Medium Diced
              </th>
              <td className="px-4 py-4 border">3000</td>
              <td className="px-4 py-4 border">Grams</td>
            </tr>
            <tr className="bg-gray-100 dark:bg-neutral-900 dark:border-gray-700">
              <td className="w-4 p-4 border">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900  dark:text-white border "
              >
                Butter
              </th>
              <td className="px-4 py-4 border">2000</td>
              <td className="px-4 py-4 border">Grams</td>
            </tr>
            <tr className="bg-gray-100 dark:bg-neutral-900 dark:border-gray-700">
              <td className="w-4 p-4 border">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900  dark:text-white border "
              >
                Celeriac, Medium Diced
              </th>
              <td className="px-4 py-4 border">3000</td>
              <td className="px-4 py-4 border">Grams</td>
            </tr>
            <tr className="bg-gray-100 dark:bg-neutral-900 dark:border-gray-700">
              <td className="w-4 p-4 border">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900  dark:text-white border "
              >
                Butter
              </th>
              <td className="px-4 py-4 border">2000</td>
              <td className="px-4 py-4 border">Grams</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Transition>
  );
};

export default RecipePage;
