import axios from "axios";

const apibaseurl = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});


export const countryDataAll = () => {
    return apibaseurl.get("/all?fields=name,population,region,capital,flags");
}

export const countryData = (name) => {
  return apibaseurl.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
};