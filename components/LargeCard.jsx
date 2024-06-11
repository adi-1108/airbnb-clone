import Image from "next/image";
import React from "react";

const LargeCard = ({ img, buttonText, title, description }) => {
  return (
    <section className="relative cursor-pointer py-16">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl shadow-lg"
        />
      </div>

      <div className="absolute left-10 top-32">
        <h3 className="mb-3 w-64 text-4xl">{title}</h3>
        <p>{description}</p>
        <button className="mt-4 rounded-xl bg-black px-6 py-4 text-md transition-all  font-semibold hover:scale-105 hover:shadow-lg text-white">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
