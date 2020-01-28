import { loadCapitalByCountryId } from './loadCapitalByCountryId';
import { loadCountry } from './loadCountry.js';

function getCapitalByCountry({countryId, countryName}){
    return  loadCountry({id: countryId, name: countryName}).then(country=> {
        return loadCapitalByCountryId(country.id).then(capital => {
            console.log(capital)})
    })
}

getCapitalByCountry({countryId: 1})