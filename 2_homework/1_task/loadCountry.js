import { countries } from './data.js';

export function loadCountry({id, name}) {
    return new Promise((resolve, reject) => {
            if (id) {
                countries.forEach(element => {
                    if (element.id == id) {
                        resolve(element)
                    }
                })
                reject(new Error('Country not found'))
            } else if (name) {
                countries.forEach(element => {
                    if (element.country == name) {
                        resolve(element)
                    }
                })
                reject(new Error('Country not found'))
            }
        }
    )
}