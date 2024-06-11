import Header from "@/components/Header";

const Search = () => {
  return (
    <div>
      <Header />

      <main className="flex">
        <section className="flex-grow mt-4 mb-6 px-6 py-4 ">
            <p>300+ stays for 5 guests</p>
            <h1 className="text-3xl">Stays in LOCATION</h1>
        </section>
      </main>
    </div>
  );
};

export default Search;
