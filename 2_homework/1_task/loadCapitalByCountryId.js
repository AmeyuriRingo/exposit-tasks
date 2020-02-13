import { capitals } from './data.js';

export function loadCapitalByCountryId(id) {
    return new Promise(((resolve, reject) => {
        capitals.forEach(element => {
            if (element.countryId == id) {
                resolve(element.name)
            }
        })
        reject(('Country not found'))

    }))
}
