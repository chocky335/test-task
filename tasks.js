
function task_1 (value) {
    return value.reduce((acc, el) => [el, ...acc], [])
}

function task_2 (value1, value2) {
    return JSON.stringify(value1) === JSON.stringify(value2)
}

function task_3 (value) {
    return Object.values(value.reduce((acc, { id, value }) => {
        const valueType = typeof value
        const stringValue = JSON.stringify(value)
        if (!acc[id]) {
            acc[id] = {
                id,
                [valueType]: 1,
                values: [stringValue]
            }
        } else if (acc[id][valueType]) {
            acc[id] = {
                ...acc[id],
                [valueType]: acc[id].values.includes(stringValue) ? acc[id][valueType] : acc[id][valueType] + 1,
                values: [...acc[id].values,stringValue]
            }
        } else {
            acc[id] = {
                ...acc[id],
                [valueType]: 1,
                values: [...acc[id].values,stringValue]
            }
        }
        return acc
    }, {})).map(({values, ...el}) => el)
}

function task_4 (value) {
    return value.reduce((acc, el, i) => {
        if (el % 2 === 0) acc += el
        if (i % 2 !== 0) acc -= i

        return acc
    }, 0)
}

function task_5 (value, searchValue) {
    const result = []
    let offset = 0
    while (value.includes(searchValue)) {
        result.push(offset + value.indexOf(searchValue))
        offset += searchValue.length
        value = value.replace(searchValue, '')
    }
    return result
}

function task_6 (value, searchValue) {
    let result = 0
    let valueLowerCase = value.toLowerCase()
    const searchValueLowerCase = searchValue.toLowerCase()

    while (valueLowerCase.includes(searchValueLowerCase)) {
        result += 1
        valueLowerCase = valueLowerCase.replace(searchValueLowerCase, '')
    }
    return result
}

function task_7 (value) {
    return Object.values(value.reduce((acc, { currency, value }) => {
        const valueType = typeof value
        const stringValue = JSON.stringify(value)
        if (acc[currency]) {
            acc[currency].value += parseFloat(value)
        } else {
            acc[currency] = {
                currency, value: parseFloat(value),
                toString: function () {
                    return `${this.currency} ${this.value.toFixed(2)}`
                }
            }
        }
        return acc
    }, {})).map((el) => el.toString())
}

function task_8 (value) {
    const regExp = /[^0-9a-zA-Z\ ]/gi
    return value.reduce((acc, el) => {
        if (typeof el === 'number') { acc += String(el).replace(regExp, '') }
        else if (typeof el === 'string') { acc += el.replace(regExp, '') }
        else if (typeof el === 'boolean' || [null, undefined].includes(el)) { acc += el }
        else if (Array.isArray(el)) { acc += task_8(el) }
        else { acc += JSON.stringify(el).replace(regExp, '') }
    
        return acc
    }, '')
}

function task_9 (value) {
    return value.every(({ done }) => done)
}

function task_10 (value, indexOffset) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    return value.split('').map(el => {
        const elLowerCase = el.toLowerCase()
        const i = alphabet.indexOf(elLowerCase)

        if (i > -1) {
            let resultIndex = i - indexOffset
            if (resultIndex < 0) resultIndex = 0
            if (resultIndex >= alphabet.length) resultIndex = alphabet.length - 1

            const result = alphabet[resultIndex]
            return elLowerCase === el ? result : result.toUpperCase()
        }

        return el
    }).join('')
}

exports.default =  {
    task_1,
    task_2,
    task_3,
    task_4,
    task_5,
    task_6,
    task_7,
    task_8,
    task_9,
    task_10
}
