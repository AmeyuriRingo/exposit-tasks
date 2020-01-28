function heatCalculator(initialTemp) {
    let oldTemp = initialTemp;
    return function (deltaTemp) {

        let newTemp = oldTemp + deltaTemp;
        if (newTemp <= -273) {
            console.log('Temperature limit reached')
        } else {
            // fix >=
            // fix case with 2 transitions at one (f.e. oldTemp = -10, newTemp = 200)
            let Q
            if (oldTemp >= 0 && oldTemp < 100 && newTemp <= 0 && oldTemp != newTemp) {
                Q = -4.2 * oldTemp - 330 + 1.8 * newTemp
            } else if (oldTemp <= 0 && newTemp >= 0 && oldTemp != newTemp) {
                if (newTemp >= 100) Q = -1.8 * oldTemp + 330 + 4.2 * 100 + 2.3 + 2 * (newTemp - 100)
                 else Q = -1.8 * oldTemp + 330 + 4.2 * newTemp
            } else if (oldTemp >= 100 && newTemp <= 100 && oldTemp != newTemp) {
                if (newTemp <= 0) Q = -2 * (oldTemp - 100) - 2.3 - 4.2 * 100 - 330 + 1.8 * newTemp
                else Q = -2 * (oldTemp - 100) - 2.3 + 4.2 * (newTemp - 100)
            } else if (oldTemp <= 100 && newTemp >= 100 && oldTemp != newTemp) {
                Q = -4.2 * (oldTemp - 100) + 2.3 + 2 * (newTemp - 100)
            } else {
                Q = 4.2 * deltaTemp;
            }
            console.log({oldTemp, newTemp, Q})
            oldTemp = newTemp
        }
    }
}

const calculator = heatCalculator(-1)
calculator(101)
calculator(-101)


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
        if (!isMaterial) {
            console.log('Unknown material')

            if (newTemp <= -273) {
                console.log('Temperature limit reached');
            } else {
                calculatorForHeat(oldTemp, newTemp, deltaTemp, material)
                oldTemp = newTemp;
            }
        } else {
            let newTemp = oldTemp + deltaTemp;
        }

    }
}

function calculatorForHeat(oldTemp, newTemp, deltaTemp, material) {
    let heat = 0;

    if (oldTemp >= list[material].crystT && oldTemp < list[material].evaT && newTemp <= list[material].crystT && oldTemp != newTemp) {
        heat = -list[material].heatL * (oldTemp - list[material].crystT) - list[material].cryst + list[material].heatS * (newTemp - list[material].crystT)
    } else if (oldTemp <= list[material].crystT && newTemp >= list[material].crystT && oldTemp != newTemp) {
        if (newTemp >= list[material].evaT) heat = -list[material].heatS * (oldTemp - list[material].crystT) + list[material].cryst + list[material].heatL * list[material].evaT + list[material].eva + list[material].heatSt * (newTemp - list[material].evaT)
        else heat = -list[material].heatS * (oldTemp - list[material].crystT) + list[material].cryst + list[material].heatL * (newTemp - list[material].crystT)
    } else if (oldTemp >= list[material].evaT && newTemp <= list[material].evaT && oldTemp != newTemp) {
        if (newTemp <= list[material].crystT) heat = -list[material].heatSt * (oldTemp - list[material].evaT) - list[material].eva - list[material].heatL * (newTemp - list[material].evaT) - list[material].cryst + list[material].heatS * (newTemp - list[material].crystT)
        else heat = -list[material].heatSt * (oldTemp - list[material].evaT) - list[material].eva + list[material].heatL * (newTemp - list[material].evaT)
    } else if (oldTemp <= list[material].evaT && newTemp >= list[material].evaT && oldTemp != newTemp) {
        heat = -list[material].heatL * (oldTemp - list[material].evaT) + list[material].eva + list[material].heatSt * (newTemp - list[material].evaT)
    } else {
        heat = list[material].heatL * deltaTemp;
    }
    console.log({oldTemp, newTemp, heat, material});
}

// const ironCalculator = heatCalculatorOne(0, 'iron')
const waterCalculator = heatCalculatorOne(-1, 'water')
// const goldCalculator = heatCalculatorOne(0, 'gold')
// const randomCalculator = heatCalculatorOne(0, 'asasa')
//
// ironCalculator(3048)
// ironCalculator(1)
// ironCalculator(1)
// ironCalculator(-1)
//
waterCalculator(101)
waterCalculator(-101)
waterCalculator(-15)
//
// goldCalculator(1064)
// goldCalculator(10)
// goldCalculator(10)
// goldCalculator(-10)
//
// randomCalculator(10)
