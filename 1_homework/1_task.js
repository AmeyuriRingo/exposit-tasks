function getSlicedValues(source, param) {
    result = []
    source.forEach(element=> {
        if (element && element.hasOwnProperty(param) && element[param]) result.push(element[param])
    })
    return result
}

console.log(getSlicedValues([{age: 12}, {age: 12}, {age: 13}, {id: 12}], 'age'))

function getSlicedValuesOne(source, param) {
    result = []
    source.forEach(element => {
        if (element && element.hasOwnProperty(param) && element[param]) result.push(element[param])
    })
    // fix object === object
    uniqueResult = result.filter(function(element, pos) {
            return result.indexOf(element) == pos;
    })
    return uniqueResult
}

console.log(getSlicedValuesOne([{age: 12}, {age: 12}, {age: 13}, {id: 12}, {age: {x: 1}}, {age: {x: 1}}], 'age'))


function getSlicedValuesTwo(source, filter) {
    filter(source, 'age')
    uniqueResult = result.filter(function(element, pos) {
        return result.indexOf(element) == pos;
    })
    return uniqueResult
}

function filter(obj, param) {
    result = []
    obj.forEach(element => {
        if (element && element.hasOwnProperty(param) && element[param]) result.push(element[param])
    })
    return result;
}
// !!!!!! areObjectsEqual check not implemented!
console.log(getSlicedValuesTwo([{age: 12}, {age: 12}, {age: 13}, {id: 12},{age: {}}, { age: {}}, null, undefined, NaN], filter))

