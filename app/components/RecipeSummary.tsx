const RecipeSummary = () => {
  return (
    <div className=" h-20 w-full bg-gray-100 rounded-md   flex justify-start border border-gray-200 items-center  px-4 hover:bg-gray-200 dark:hover:bg-neutral-700 dark:bg-neutral-900 dark:border-neutral-800">
      <div className=" z-0  inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-blue-600 rounded-full dark:bg-blue-500">
        <span className="text-lg text-gray-100 dark:text-gray-300">JL</span>
      </div>
      <div className="ml-6">
        <h6 className="text-md text-gray-900 dark:text-gray-50">
          Saffron Mayo
        </h6>
        <h6 className="text-sm text-blue-500 dark:text-blue-400">Sauces</h6>
      </div>
      <div className=" ml-auto ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-blue-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default RecipeSummary;
