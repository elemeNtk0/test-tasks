// const a = {
//   field: 10,
// };

// function doSmth(a) {
//   a = {};
//   a.field = 21;
//   return a;
// }

// console.log(doSmth(a));
// console.log(a);
// console.log(doSmth(18));

// solution Ex3/
// const a = {
//   field: 10,
// };

// function doSmth(a) {
//   for (let objName in a) {
//     if (a.hasOwnProperty(objName) && typeof a[objName] === 'number') {
//       a[objName] = a[objName] * 2;
//     }
//   }
// }
// doSmth(a);
// console.log(a);

// const a = {
//   b: 12,
// };

// function doSmth(value) {
//   value = {};
//   value.b = 34;
// }

// doSmth(a);

// console.log(a); // => { b: 12 }

// function deferredValue(value) {
//   let promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(value);
//     }, 3000);
//   });

//   return promise;
// }

// function multiply(a, b) {
//   a = deferredValue(a);
//   b = deferredValue(b);
//   Promise.all([a, b]).then((arr) => console.log(arr[0] * arr[1]));
// }

// multiply(12, 13);

let arr = [
  { a: 12, b: 89 },
  { a: 2, b: null },
  { a: 12.4, b: '8' },
];

function getSum(arr) {
  let result = 0;

  arr.forEach((item) => {
    for (let objName in item) {
      if (item.hasOwnProperty(objName) && typeof item[objName] === 'number') {
        if (Number.isInteger(item[objName])) result = result + item[objName];
      }
    }
  });

  console.log('result: ' + result);
}

getSum(arr);
