import { fetchBikes } from "@/utils";
import { HomeProps } from "@/types";
import { yearsOfProduction } from "@/constants";
import {SearchBar, CustomFilter, Hero } from "@/components";
import { BikeCard, ShowMore } from "@/components";

export default async function Home({ searchParams }: HomeProps) {
  const allBikes = await fetchBikes({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allBikes) || allBikes.length < 1 || !allBikes;

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Bike Catalogue</h1>
          <p>View Specs of any Bike you like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allBikes?.map((bike) => (
                <BikeCard bike={bike} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allBikes.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>No results...</h2>
            <p>{allBikes?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
