import Image from "next/image";

const SmallCard = ({ imageURL, location, distance }) => {
  return (
    <div className="flex gap-4 rounded-xl p-5 shadow-sm transition-all hover:scale-105 hover:bg-gray-100 hover:shadow-xl">
      <div className="relative h-16 w-16">
        <Image
          className="rounded-xl"
          src={imageURL}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div>

      <div className="flex flex-col items-start justify-center gap-3">
        <p className="text-lg font-semibold">{location}</p>
        <p>{distance}</p>
      </div>
    </div>
  );
};

export default SmallCard;
