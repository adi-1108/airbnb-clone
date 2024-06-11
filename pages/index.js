import Banner from "@/components/Banner";
import Header from "@/components/Header";
import LargeCard from "@/components/LargeCard";
import MediumCard from "@/components/MediumCard";
import SmallCard from "@/components/SmallCard";
import Head from "next/head";

export default function Home({ data, cardData }) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
      </Head>

      <Header />
      <Banner />

      <main className="mx-auto max-w-7xl px-16">
        <section className="pt-6">
          <h4 className="pb-4 text-4xl font-semibold">Explore Nearby</h4>

          <div className="grid grid-cols-4 gap-4">
            {data?.map((item) => (
              <SmallCard
                imageURL={item.img}
                location={item.location}
                distance={item.distance}
                key={item.img}
              />
            ))}
          </div>
        </section>

        <section className="mb-10 py-10">
          <h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>
          <div className="flex w-full gap-4 overflow-x-scroll  px-4 py-10 transition duration-300 ease-out scrollbar-hide">
            {cardData?.map((item) => (
              <MediumCard
                image={item.image}
                title={item.title}
                key={item.image}
              />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://www.jsonkeeper.com/b/4G1G");
  const data = await res.json();

  const cardData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json(),
  );
  return {
    props: {
      data,
      cardData,
    },
  };
}
