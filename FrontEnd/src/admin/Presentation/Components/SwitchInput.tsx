import { useId } from "react";

interface Props {
  checkedStatus: boolean;
  handleChange: () => void;
}

export const SwitchInput = ({
  checkedStatus,
  handleChange,
}: Props) => {
  const createdId = useId();

  return (
    <label
      htmlFor={createdId}
      className="relative inline-flex items-center cursor-pointer"
    >
      <input
        type="checkbox"
        id={createdId}
        value=""
        className="sr-only peer"
        checked={checkedStatus}
        onChange={handleChange}
      />
      <div
        className={`w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-[#09c]`}
      />
    </label>
  );
};
