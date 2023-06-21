const original = [5, 7, 13, 17, 26, 34, 118, 245];

const newArray = [];

original.forEach((element) => {
  if (element >= 10 && element <= 20) {
    newArray.push(element);
  } else if (element > 100) {
    newArray.push(element);
  }
});

console.log(newArray);
