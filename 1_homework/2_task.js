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

const materials = ['water', 'iron', 'gold']
const list = {
    water: {
        heatL: 4.2,
        heatS: 1.8,
        heatSt: 2,
        cryst: 330,
        eva: 2.3,
        crystT: 0,
        evaT: 100,
    },
    iron: {
        heatL: 0.444,
        heatS: 0.444,
        heatSt: 0.444,
        cryst: 277,
        eva: 6300,
        crystT: 1538,
        evaT: 3050,
    },
    gold: {
        heatL: 0.129,
        heatS: 0.129,
        heatSt: 0.129,
        cryst: 67,
        eva: 66,
        crystT: 1064,
        evaT: 2807,
    }
}

function heatCalculatorOne(initialTemp, material) {
    let oldTemp = initialTemp;

    return function (deltaTemp) {
        const isMaterial = materials.includes(material);
        if (isMaterial) {
            let newTemp = oldTemp + deltaTemp;

            if (newTemp > -273) {
                calculatorForHeat(oldTemp, newTemp, deltaTemp, material)
                oldTemp = newTemp;
            } else {
                console.log('Temperature limit reached');
            }
        } else {
            console.log('Unknown material')
        }

    }
}

function calculatorForHeat(oldTemp, newTemp, deltaTemp, material) {
    let heat = 0;

    if (oldTemp > list[material].crystT && newTemp < list[material].crystT) {
        heat = -list[material].heatL * (oldTemp - list[material].crystT) - list[material].cryst + list[material].heatS * (newTemp - list[material].crystT)
    } else if (oldTemp < list[material].crystT && newTemp > list[material].crystT) {
        heat = -list[material].heatS * (oldTemp - list[material].crystT) + list[material].cryst + list[material].heatL * (newTemp - list[material].crystT)
    } else if (oldTemp > list[material].evaT && newTemp < list[material].evaT) {
        heat = -list[material].heatSt * (oldTemp - list[material].evaT) - list[material].eva + list[material].heatL * (newTemp - list[material].evaT)
    } else if (oldTemp < list[material].evaT && newTemp > list[material].evaT) {
        heat = -list[material].heatL * (oldTemp - list[material].evaT) + list[material].eva + list[material].heatSt * (newTemp - list[material].evaT)
    } else {
        heat = list[material].heatL * deltaTemp;
    }
    console.log({oldTemp, newTemp, heat, material});
}

const calculator = heatCalculator(0)
calculator(20)
calculator(90)
calculator(-15)

const ironCalculator = heatCalculatorOne(0, 'iron')
const waterCalculattor = heatCalculatorOne(0, 'water')
const goldCalculator = heatCalculatorOne(0, 'gold')
const randomCalculator = heatCalculatorOne(0, 'asasa')

ironCalculator(3033)
ironCalculator(10)
ironCalculator(10)
ironCalculator(-10)

waterCalculattor(20)
waterCalculattor(90)
waterCalculattor(-15)

goldCalculator(2790)
goldCalculator(10)
goldCalculator(10)
goldCalculator(-10)

randomCalculator(10)
