import Header from "@/components/Header";
import HotelCard from "@/components/HotelCard";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Search = () => {
  const router = useRouter();

  const { location, endDate, guestNumber, startDate } = router.query;
  const [hotels, setHotels] = useState([]);
  const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  // console.log(data);

  return (
    <div>
      <Header
        placeholder={`${location} | ${formatedStartDate}-${formatedEndDate} | ${guestNumber} guests`}
      />

      <main className="flex">
        <section className="mb-6 mt-4 flex-grow px-6 py-4">
          <div className="pb-10">
            <p>300+ stays for {guestNumber} guests</p>
            <h1 className="text-3xl">Stays in {location}</h1>
            <p>
              from {formatedStartDate} to {formatedEndDate}
            </p>
          </div>

          <div className="grid grid-cols-3">
            <HotelCard />{" "}
          </div>
        </section>
        <section className="flex-grow">MAP</section>
      </main>
    </div>
  );
};

export default Search;
