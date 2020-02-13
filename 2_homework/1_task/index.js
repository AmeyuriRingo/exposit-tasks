import {getCapitalByCountry} from './getCapitalByCountry';

getCapitalByCountry({countryId: 1, countryName: 'sadadad'})
    .then(capital => {
    console.log(capital)})
    .catch(error => {
        console.log(error)
    })

getCapitalByCountry({countryId: 2, countryName: 'Ukraine'})
    .then(capital => {
        console.log(capital)})
    .catch(error => {
        console.log(error)
    })

getCapitalByCountry({countryId: 1, countryName: 'Minsk'})
    .then(capital => {
        console.log(capital)})
    .catch(error => {
        console.log(error)
    })

getCapitalByCountry({countryId: 1, countryName: undefined})
    .then(capital => {
        console.log(capital)})
    .catch(error => {
        console.log(error)
    })