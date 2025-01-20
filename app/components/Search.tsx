import { HiMagnifyingGlass, HiChevronUpDown } from "react-icons/hi2";
import { RiArrowDownSFill } from "react-icons/ri";

import Button from "./Button"

const Search = () => {
  return (
    <div className="relative flex justify-between items-center p-2 bg-gray-100 ">
      <div className="flex items-center gap-2">
        <HiMagnifyingGlass className="absolute left-4 top-4 text-gray-500"/>
        <input
          type="text"
          placeholder="Search"
          className="py-1 px-8 w-64 rounded-md"
        />
        <Button style="p-1"><RiArrowDownSFill/>Filter</Button>
      </div>
      <div className="flex justify-around items-center gap-2">
        <Button style="bg-green-700 text-white p-1">Bulk message</Button>
        <Button style=" p-1 ">Group Actions<HiChevronUpDown/></Button>
      </div>
    </div>
  )
}

export default Search
