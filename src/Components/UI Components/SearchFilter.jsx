import React from 'react'
import Loader from './Loader';

const SearchFilter = ({
    search,
    setSearch,
    filter,
    setFilter,
    countriesData,
    setCountriesData,
}) => {

    const handleInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    };

    const handleSelectChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value);
    };

    // if (!countriesData || countriesData.length === 0) {
    //     return <Loader />;
    // }

    const sortCountries = (value) => {
        const sortCountry = [...countriesData].sort((a, b) => {
            return value === "asc"
                ? a.name.common.localeCompare(b.name.common)
                : b.name.common.localeCompare(a.name.common);
        });
        setCountriesData(sortCountry);
    };

    return (
        <section className="section-searchFilter container">
            <div>
                <input
                    type="text"
                    placeholder="Search country"
                    value={search}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <button onClick={() => sortCountries("asc")}>Ascending</button>
            </div>

            <div>
                <button onClick={() => sortCountries("des")}>Descending</button>
            </div>

            <div>
                <select
                    className="select-section"
                    value={filter}
                    onChange={handleSelectChange}>

                    <option value="all">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>

                </select>
            </div>
        </section>
    )
}

export default SearchFilter
