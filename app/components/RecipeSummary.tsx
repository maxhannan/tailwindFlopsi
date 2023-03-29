const RecipeSummary = () => {
  return (
    <div className=" h-20 w-full bg-gray-50 rounded-md flex justify-start border border-gray-200 items-center px-4 hover:bg-gray-200 hover:bg-opacity-40">
      <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-blue-600 rounded-full dark:bg-gray-600">
        <span className="text-xl text-gray-100 dark:text-gray-300">JL</span>
      </div>
      <div className="ml-4">
        <h6 className="text-lg">Saffron Mayo</h6>
        <h6 className="text-md text-gray-500">Saffron Mayo</h6>
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
