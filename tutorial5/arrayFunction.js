const arr = [1, 2, 3, 5, 7];
// console.log(arr.map((e) => e * 2));

// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   result.push(element * 2);
// }
// console.log(result);

const myMap = (array, func) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    result.push(func(element));
  }
  return result;
};
// console.log(myMap(arr, (e) => e * 2));

// 找到数组里大于4的值
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   if (element > 4) {
//     result.push(element);
//   }
// }
// console.log(result);

const myFilter = (arr, func) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (func(element)) {
      result.push(element);
    }
  }
  return result;
};
// console.log(myFilter(arr, (e) => e < 5));

// 找到第一个大于2的值
// let result;
// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   if (element > 2) {
//     result = element;
//     break;
//   }
// }
// console.log(result);

const myFind = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (func(element)) {
      return element;
    }
  }
};
// console.log(myFind(arr, (e) => e > 2));

// 求和
// let res = 0;
// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   res = res + element;
// }
// console.log(res);

const myReduce = (arr, func, initVal) => {
  let accumulator = initVal;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(i, element, accumulator);
    accumulator = func(accumulator, element);
  }
  return accumulator;
};
// console.log(myReduce(arr, (acc, cur) => acc + cur, 0));

// 打印出来每一个元素的值
const myForEach = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    func(element);
  }
};
myForEach(arr, (e) => console.log(e));
