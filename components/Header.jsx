import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import {
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
const Header = () => {
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

      <div className="flex items-center rounded-full border-2 px-4 py-2">
        <input
          className="flex-grow focus:outline-none"
          type="text"
          placeholder="Start your search"
        />
        <MagnifyingGlassIcon class="h-8 cursor-pointer rounded-full bg-red-500 p-2 text-white" />
      </div>

      <div className="text-grey-500 flex items-center justify-end space-x-4">
        <p>Become a Host</p>
        <GlobeAltIcon className="h-8" />
        <div className="flex rounded-full shadow-md p-2 border-2 gap-2">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
