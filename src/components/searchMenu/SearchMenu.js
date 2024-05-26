import { useState } from "react";
import icons from "../../constants/icons";
function SearchMenu(props) {
  const [search, setSearch] = useState("");
  const onSearchChange = () => {
    props.onSearchChange(search);
  };
  const searchKeydown = (e) => {
    if (e.key === "Enter") {
      onSearchChange();
    }
  };
  return (
    <>
      <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative">
        <div className="relative">
          <icons.FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
          <input
            className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4"
            type="text"
            name="search"
            placeholder="Search Puisi"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={searchKeydown}
          />
        </div>
        <button
          onClick={onSearchChange}
          className="w-full bg-blue-900 text-white font-semibold rounded-lg px-4 py-2 md:absolute md:right-2 md:w-fit md:py-2"
        >
          Search
        </button>
      </div>
    </>
  );
}

export default SearchMenu;
