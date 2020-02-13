import {loadCountry} from "./loadCountry";
import {loadCapitalByCountryId} from "./loadCapitalByCountryId";


export function getCapitalByCountry({countryId, countryName}){
    return  loadCountry({id: countryId, name: countryName}).then(country=> {
        return loadCapitalByCountryId(country.id)
    })
}