const original = [1, 4, 12, 21, 53, 88, 112];

const total = [];

original.forEach((item) => {
  if (item % 2 == 0) {
    total.push(item);
  }
});

console.log(total);
