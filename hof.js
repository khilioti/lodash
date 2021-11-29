const _ = require('lodash')

function multiple (a, b) {
    return a * b
}

function divide (a, b) {
    return a / b
}

// console.log(multiple(10, 8))

// function duble (num) {
//     return multiple(num, 2)
// }

// function partial (fn, ...fixed) {
//     return function (...args) {
//         return fn.apply(this, fixed.concat(args))
//     }
// }

// function partial (fn) {
//     const fixed = _.tail(_.toArray(arguments))
//     return function () {
//         return fn.apply(this, _.concat(fixed, arguments))
//     }
// }


// const duble = _.partial(multiple, 2)
//
// // console.log(duble(3))
//
//  // const half = _.partialRight(divide, 2)
//  const half = _.partialRight(divide, _, 2)
//
// console.log(half(4))

// ==================
// const curriedDivide = _.curry(divide)
//
// console.log(curriedDivide(10, 2))
// console.log(curriedDivide(10)(2))
//===========

const notFlatArray = [1, 2, 3, [4, 5]] //15
console.log(_.sum(notFlatArray))

const sumFlat = _.flow([_.concat, _.flattenDepth, _.sum])

console.log(sumFlat(notFlatArray))