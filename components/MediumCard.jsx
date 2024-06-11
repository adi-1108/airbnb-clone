import Image from "next/image";

const MediumCard = ({ image, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105">
      <div className="relative h-80 w-80">
        <Image
          className="rounded-xl"
          src={image}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div>
      <h3 className="font-semibold">{title}</h3>
    </div>
  );
};

export default MediumCard;
