import React, { useEffect, useState, useTransition } from 'react'
import { countryDataAll } from '../data/Contrydataapi'
import Loader from '../Components/UI Components/Loader';
import CountryCards from '../Components/UI Components/CountryCards';
import SearchFilter from '../Components/UI Components/SearchFilter';

const CountryPage = () => {

  const [isPending, startTransition] = useTransition();
  const [countriesData, setCountriesData] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const response = await countryDataAll();
      // console.log(response.data);
      setCountriesData(response.data);
    })
  }, [])

  // console.log(countriesData);
  if (isPending) return <Loader />

  // console.log(search, filter);

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  // const filterCountries = countriesData.filter(
  //   (country) => searchCountry(country) && filterRegion(country)
  // );

  const filterCountries = countriesData.filter((country) => {
  const matchesSearch = search ? searchCountry(country) : true;
  const matchesFilter = filter === "all" ? true : country.region === filter;
  return matchesSearch && matchesFilter;
});



  return (
    <section className='country-section'>

      <h2 className='country-title'>Uncover Surprising Details from Nations Across the Globe!</h2>
      <p className='country-description'>Delve into lesser-known truths and captivating stories that make each<br />  country an intriguing subject of exploration.</p>

      <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countriesData={countriesData}
        setCountriesData={setCountriesData} />

      <ul className='grid grid-four-cols'>
        {
          filterCountries.map((currentCountry, index) => {
            return <CountryCards country={currentCountry} key={index} />
          })
        }
      </ul>
    </section>
  )
}

export default CountryPage
