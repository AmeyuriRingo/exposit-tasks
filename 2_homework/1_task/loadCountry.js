import {countries} from './data.js';

export function loadCountry({id, name}) {
    return new Promise((resolve, reject) => {

            if (id && name) {
                if (typeof id !== 'number' && typeof name !== 'string') {
                    reject(('Incorrect data'))
                } else  {
                    countries.forEach(element => {
                        if (element.id == id && element.country == name) {
                            resolve(element)
                        }
                    })
                }
                reject(('Country not found'))
            } else if (id || name) {
                if (typeof id !== 'number' || typeof name !== 'string') {
                    reject(('Incorrect data'))
                } else {
                    countries.forEach(element => {
                        if (element.id == id || element.country == name) {
                            resolve(element)
                        }
                    })
                }
                reject(('Country not found'))
            }
        }
    )
}