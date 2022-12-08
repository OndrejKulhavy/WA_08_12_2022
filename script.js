let result = document.querySelector("#result");
let button = document.querySelector("#button");
let input = document.querySelector("#pole");

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivot = arr[0];
  var left = [];
  var right = [];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  var middle = Math.floor(arr.length / 2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }
  return result;
}

function print() {
  var arr = [];
  arr = input.value.split(",").map(Number);
  console.log(arr);
  let time1 = new Date();
  console.log(mergeSort(arr));
  let time2 = new Date();

  let time3 = new Date();
  console.log(quickSort(arr));
  let time4 = new Date();
  result.innerHTML =
    "Výsledek: " +
    arr +
    "; <br> Merge sort trval: " +
    (time2 - time1) +
    ", Quick sort trval: " +
    (time3 - time4);
}
button.addEventListener("click", print);

let names = [
  "Adam",
  "Jidřich",
  "Petr",
  "Jan",
  "Josef",
  "Pavel",
  "Martin",
  "Jaroslav",
  "Václav",
  "Tomáš",
  "Michal",
  "Marek",
  "Jakub",
  "Lukáš",
  "Karel",
  "Filip",
  "David",
  "Matěj"
];

names.sort();
console.log(names);
