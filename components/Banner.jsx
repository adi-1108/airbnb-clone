import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-lg font-semibold">Not sure where to go?</p>
        <button className="mt-4 rounded-full bg-white px-8 py-4 font-semibold text-purple-500 shadow-md transition-all hover:shadow-xl active:scale-90">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
