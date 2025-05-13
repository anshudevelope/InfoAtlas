import React, { useEffect, useState, useTransition } from 'react'
import { countryDataAll } from '../data/Contrydataapi'
import Loader from '../Components/UI Components/Loader';
import CountryCards from '../Components/UI Components/CountryCards';

const CountryPage = () => {

  const [isPending, startTransition] = useTransition();

  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const response = await countryDataAll();
      // console.log(response.data);
      setCountriesData(response.data);
    })
  }, [])

  // console.log(countriesData);
  if (isPending) return <Loader />

  return (
    <section className='country-section'>
      <h2 className='country-title'>Uncover Surprising Details from Nations Across the Globe!</h2>
      <p className='country-description'>Delve into lesser-known truths and captivating stories that make each country an intriguing subject of exploration.</p>
      <ul className='grid grid-four-cols'>
        {
          countriesData.map((currentCountry, index) => {
            return <CountryCards country={currentCountry} key={index} />
          })
        }
      </ul>
    </section>
  )
}

export default CountryPage
