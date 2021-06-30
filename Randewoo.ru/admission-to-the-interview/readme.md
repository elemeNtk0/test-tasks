## Ex.1: Является ли функция обьектом?

- [x] Да
- [ ] Нет

---

## Ex.2: Что будет выведено в результате выполнения примера? Почему?

```js
const a = {
  field: 10,
};

function doSmth(a) {
  a = {};
  a.field = 21;
  return a;
}

console.log(doSmth(a));
console.log(a);
console.log(doSmth(18));
```

### Solution:

```log
{field: 21}
{field: 10}
{field: 21}
```

Только `console.log(a)` выведет обьъявленный в глобальной области видимости обьект `a` и выведет его так: `{field: 10}`, в остальных случаях - не важно, какое число или какой обьект мы передадим в функцию, ибо внутри неё идёт сперва обьявление переменной `a`, которая находится в локальной области видимости у функции и дальше `a.filed = 21` создаёт `filed: 21`. Т.е. это полностью новый объект и он только похож на первоначально объявленный `a`. Можно записать хоть так: `a.customname = 55` — создастся на момент вызова обьект а, которому будет присвоено `{customname: 55}`. После отработанного каждого консоль лога — с вызовом функции `doSmth()` будет очищена память по области видимости и никто не сможет достучаться до тех значений, которые были выведены через консоль лог.

---

## Ex.3: Напишите реализацию функции, чтобы получить указанный вывод в консоли.

```js
const a = {
  field: 10
};

function doSmth(...) {...}
doSmth(...);

console.log(a); // => { field: 20 }
```

### Solution:

```js
const a = {
  field: 10,
};

function doSmth(a) {
  for (let objName in a) {
    if (a.hasOwnProperty(objName) && typeof a[objName] === 'number') {
      a[objName] = a[objName] * 2;
    }
  }
}
doSmth(a);

console.log(a);
```

Сделал на случай расширения. Решил проверить на существование свойств и на то, что значение = число. Только после этого умножил его на 2.

---

## Ex.4: Обязательные элементы HTTP-запроса.

- [ ] url
- [x] url + метод
- [ ] url + параметры
- [ ] url + метод + параметры

---

## Ex.5: Исправьте код.

```js
function deferredValue(value) {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      return value;
    }, 3000);
  });
}

function multiply(a, b) {
  const a = deferredValue(a);
  const b = deferredValue(b);
  return a * b;
}

multiply(12, 13);
```

### Solution:

```js
function deferredValue(value) {
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, 3000);
  });

  return promise;
}

function multiply(a, b) {
  a = deferredValue(a);
  b = deferredValue(b);
  Promise.all([a, b]).then((arr) => console.log(arr[0] * arr[1]));
}

multiply(12, 13);
```

---

## Ex.6: Как будет выглядеть в REST-архитектуре ссылка для получения информации о перемещении пользователя?

### Solution:

`GET /api/users/ae1234/movement?v=1`

---

## Ex.7: Дан массив вида [{ a: 12, b: 89}, { a: 2, b: null }, { a: 12.4, b: "8"}]. Предложить код, который считает сумму целочисленных элементов этого массива.

### Solution:

```js
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
```

---

## Ex.8: Исправьте код.

```js
const a = {
  b: 12,
};

function doSmth(value) {
  ... // Что написать, чтобы в итоге получить вывод консоли ниже?
  value.b = 34;
}
doSmth(a);
console.log(a); // => { b: 12 }
```

### Solution:

```js
function doSmth(value) {
  value = {};
  value.b = 34;
}
```

or

```js
function doSmth(value) {
  Object.freeze(value);
  value.b = 34;
}
```

or

```js
function doSmth(value) {
  return;
  value.b = 34;
}
```

---
