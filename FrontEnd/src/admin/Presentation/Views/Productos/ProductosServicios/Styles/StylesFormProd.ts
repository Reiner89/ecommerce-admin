export const checkboxContainer =
  "inline-flex items-center gap-2 border border-solid border-transparent py-1.5 px-3.5 has-[:checked]:border-[#09c] rounded-md transition-all duration-300";

export const checkboxInput =
  "before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#000000de] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#09c] checked:bg-[#09c] checked:before:bg-[#09c]";

export const checkboxSpan =
  "absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100";
