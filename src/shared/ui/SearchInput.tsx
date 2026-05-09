import { useId } from "react";
import { IoSearchOutline } from "react-icons/io5";

export const SearchInput = () => {
  const id = useId();
  return (
    <label
      htmlFor={`search-${id}`}
      className="flex items-center max-w-[475px] w-full h-[38px] p-3 rounded-[9px] bg-[#FBFAFA]"
    >
      <input
        className="w-full h-full bg-transparent outline-none text-sm"
        id={`search-${id}`}
        type="text"
        placeholder="Search a game"
      />
      <IoSearchOutline size={24} />
    </label>
  );
};
