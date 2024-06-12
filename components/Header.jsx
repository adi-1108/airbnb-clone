import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import {
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

import { useRouter } from "next/router";

const Header = ({placeholder}) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guestNumber, setGuestNumber] = useState(0);
  const router = useRouter();
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guestNumber,
      },
    });
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white px-5 py-5 shadow-md md:px-10">
      <div className="relative my-auto flex h-10 cursor-pointer items-center justify-between">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectPosition="left"
          objectFit="contain"
        />
      </div>

      {/* SearchBar */}
      <div className="flex items-center rounded-full border-2 px-4 py-2">
        <input
          className="flex-grow focus:outline-none"
          type="text"
          placeholder={placeholder ? placeholder : "Start you search"}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <MagnifyingGlassIcon class="h-8 cursor-pointer rounded-full bg-red-500 p-2 text-white" />
      </div>

      <div className="text-grey-500 flex items-center justify-end space-x-4">
        <p>Become a Host</p>
        <GlobeAltIcon className="h-8" />
        <div className="flex gap-2 rounded-full border-2 p-2 shadow-md">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="col-span-3 mx-auto mt-3 flex flex-col transition-all">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />

          <div className="mb-3 flex items-center border-b-2">
            <h2 className="flex-grow pl-2 text-2xl font-bold">
              Number of guests
            </h2>
            <UserIcon className="h-5 w-5" />
            <input
              min={1}
              value={guestNumber}
              onChange={(e) => setGuestNumber(e.target.value)}
              type="number"
              className="w-12 pl-2 text-lg text-red-400 outline-none"
            />
          </div>

          <div className="flex items-center">
            <button
              onClick={() => {
                setSearchInput("");
              }}
              className="flex-grow rounded-full px-4 py-2 text-gray-500 transition-all hover:scale-105 hover:shadow-lg"
            >
              Cancel
            </button>
            <button
              onClick={handleSearch}
              className="flex-grow rounded-full px-4 py-2 text-red-400 transition-all hover:scale-105 hover:shadow-lg"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
