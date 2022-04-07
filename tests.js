
const {
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
} = require('./tasks').default

function test (fn, ...arg) {
    console.log(`${fn.name} ${JSON.stringify(arg)} ==> ${JSON.stringify(fn(...arg))}`)
}

test(task_1, [])
test(task_1, [1,2,3])
test(task_1, [1,2,3,4,5])
test(task_1, [1,2,3,4,5])

test(task_2, [], [123, 2])
test(task_2, [123, 2], [])
test(task_2, [2], [3])
test(task_2, [1,1,1], [1,1,1])

test(task_3, [
    {id: 1, value: 2}, 
    {id: 1, value: 'asd'},
    {id: 1, value: 'asd'}
])

test(task_4, [1,2,3,4,5])
test(task_4, [1,2,3])

test(task_4, [1,2,3,4,5])
test(task_4, [1,2,3])

test(task_5, 'asdasdasdasd', 'a')

test(task_6, 'asdasdasdasd', 'a')
test(task_6, 'asdasdasdasd', 'A')
test(task_6, 'asdasdasdasd', 'As')

test(task_7, [{currency: 'UAH', value: 1},{currency: 'UAH', value: '1.01'},{currency: 'EUR', value: '1.01'}])

test(task_8, [ 1, 'a3s.d', 'ff',  ' ', null, false])
test(task_8, [ 
    {id: 1, value: 2}, 
    {id: 1, value: 'asd'},
    {id: 1, value: 'asd'}
])

test(task_9, [ {id: 1, done: true }, {id: 2, done: true } ])
test(task_9, [ {id: 1, done: true }, {id: 2, done: false } ])

test(task_10, 'Lorem ipsum dolor sit amet', 1)
