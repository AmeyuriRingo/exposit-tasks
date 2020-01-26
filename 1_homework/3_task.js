let countries = [
    {
        id: 1,
        country: "Belarus"
    },
    {
        id: 2,
        country: "Russia"
    },
    {
        id: 3,
        country: "Ukraine"
    }
]

let capitals = [
    {
        id: 1,
        name: 'Moscow',
        countryId: 2
    },
    {
        id: 2,
        name: 'Kiev',
        countryId: 3
    },
    {
        id: 3,
        name: 'Minsk',
        countryId: 1
    },
]

function loadCountryById(id) {
    return new Promise(((resolve, reject) => {
        if (Math.random() < 0.05) {
            console.log('Could not retrieve the data')
        } else {
            countries.forEach(element => {
                if (element.id == id) {
                    setTimeout(resolve(element), 3000)
                }
            })
            reject(new Error('Country not found'))
        }
    }))
}

function loadCountry({id, name}) {
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
                        setTimeout(resolve(element), 3000)
                    }
                })
                reject(new Error('Country not found'))
            }
        }
    )
}

function loadCapitalByCountryId(id) {
    return new Promise(((resolve, reject) => {
        capitals.forEach(element => {
            if (element.countryId == id) {
                resolve(element.name)
            }
        })
        reject(new Error('Country not found'))

    }))
}

function getCapitalByCountry({countryId, countryName}){
    return  loadCountry({id: countryId, name: countryName}).then(country=> {
        return loadCapitalByCountryId(country.id).then(capital => {
            console.log(capital)})
    })
}

console.log(loadCountryById(2))

console.log(loadCountry({id: 2}))

console.log(loadCapitalByCountryId(2))

getCapitalByCountry({countryId: 1})