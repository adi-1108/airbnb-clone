import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
const HotelCard = ({}) => {
  return (
    <div className="h-fit w-80 cursor-pointer shadow-md rounded-xl">
      <div className="relative h-72 w-80">
        <Image
          src="https://links.papareact.com/4cj"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>

      <div className="relative mt-4 flex items-center justify-between px-4">
        <h3>Apartment in Clova, India</h3>
        <div className="flex">
          <StarIcon className="h-6 w-6 text-yellow-300" />
          <p>4.6/5.00</p>
        </div>
      </div>

      <div className="px-4 pb-5">
        <p>3 bed</p>
        <p>$1000 night</p>
      </div>
    </div>
  );
};

export default HotelCard;
