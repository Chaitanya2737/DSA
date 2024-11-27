const array = [1, 1, 22, 22, 3, 4, 3, 5];

const unqiue = 0;
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] === array[j]) {
      array[i] = -1;
      array[j] = -1;
    }
  }
}

for (let i = 0; i < array.length; i++) {
  if (array[i] >= 0) {
    console.log(array[i]);
  }
}