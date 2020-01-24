function heatCalculator(initialTemp) {
    let oldTemp = initialTemp;
    return function (deltaTemp) {

        let newTemp = oldTemp + deltaTemp;
        if (newTemp < -273) {
            console.log('Temperature limit reached')
        } else {
            let Q
            if (oldTemp > 0 && newTemp < 0) {
                Q = -4.2 * oldTemp - 330 + 1.8 * newTemp
            } else if (oldTemp < 0 && newTemp > 0) {
                Q = -1.8 * oldTemp + 330 + 4.2 * newTemp
            } else if (oldTemp > 100 && newTemp < 100) {
                Q = -2 * (oldTemp - 100) - 2.3 + 4.2 * (newTemp - 100)
            } else if (oldTemp < 100 && newTemp > 100) {
                Q = -4.2 * (oldTemp - 100) + 2.3 + 4.2 * (newTemp - 100)
            } else {
                Q = 4.2 * deltaTemp;
            }

            console.log({oldTemp, newTemp, Q})

            oldTemp = newTemp
        }
    }
}

function heatCalculatorOne(initialTemp, material) {
    let oldTemp = initialTemp;
    return function (deltaTemp) {

        let newTemp = oldTemp + deltaTemp;
        if (newTemp < -273) {
            console.log('Temperature limit reached')
        } else {
            let Q
            if (material == 'water') {
                if (oldTemp > 0 && newTemp < 0) {
                    Q = -4.2 * oldTemp - 330 + 1.8 * newTemp
                } else if (oldTemp < 0 && newTemp > 0) {
                    Q = -1.8 * oldTemp + 330 + 4.2 * newTemp
                } else if (oldTemp > 100 && newTemp < 100) {
                    Q = -2 * (oldTemp - 100) - 2.3 + 4.2 * (newTemp - 100)
                } else if (oldTemp < 100 && newTemp > 100) {
                    Q = -4.2 * (oldTemp - 100) + 2.3 + 4.2 * (newTemp - 100)
                } else {
                    Q = 4.2 * deltaTemp;
                }
                console.log({oldTemp, newTemp, Q, material})
            } else if (material == 'iron') {
                if (oldTemp > 1538 && newTemp < 1538) {
                    Q = -0.444 * (oldTemp-1538) - 277 + 0.444 * (newTemp-1538)
                } else if (oldTemp < 1538 && newTemp > 1538) {
                    Q = -0.444 * (oldTemp-1538) + 277 + 0.444 * (newTemp-1538)
                } else if (oldTemp > 3050 && newTemp < 3050) {
                    Q = -0.444 * (oldTemp - 3050) - 6300 + 0.444 * (newTemp - 3050)
                } else if (oldTemp < 3050 && newTemp > 3050) {
                    Q = -0.444 * (oldTemp - 3050) + 6300 + 0.444 * (newTemp - 3050)
                } else {
                    Q = 0.444 * deltaTemp;
                }
                console.log({oldTemp, newTemp, Q, material})
            } else if (material == 'gold') {
                if (oldTemp > 1064 && newTemp < 1064) {
                    Q = -0.129 * (oldTemp-1064) - 67 + 0.129 * (newTemp-1064)
                } else if (oldTemp < 1064 && newTemp > 1064) {
                    Q = -0.129 * (oldTemp-1064) + 67 + 0.129 * (newTemp-1064)
                } else if (oldTemp > 2807 && newTemp < 2807) {
                    Q = -0.129 * (oldTemp - 2807) - 66 + 0.129 * (newTemp - 2807)
                } else if (oldTemp < 2807 && newTemp > 2807) {
                    Q = -0.129 * (oldTemp - 2807) + 66 + 0.129 * (newTemp - 2807)
                } else {
                    Q = 0.129 * deltaTemp;
                }
                console.log({oldTemp, newTemp, Q, material})
            } else {
                console.log('Unknown material')
            }
            oldTemp = newTemp
        }
    }
}

const calculator = heatCalculator(0)
console.log(calculator(20))
console.log(calculator(90))
console.log(calculator(-15))

const ironCalculator = heatCalculatorOne(0, 'iron')
const waterCalculattor = heatCalculatorOne(0, 'water')
const goldCalculator = heatCalculatorOne(0, 'gold')
const randomCalculator = heatCalculatorOne(0, 'asasa')

console.log(ironCalculator(3033))
console.log(ironCalculator(10))
console.log(ironCalculator(10))
console.log(ironCalculator(-10))

console.log(goldCalculator(2790))
console.log(goldCalculator(10))
console.log(goldCalculator(10))
console.log(goldCalculator(-10))

console.log(randomCalculator(10))
