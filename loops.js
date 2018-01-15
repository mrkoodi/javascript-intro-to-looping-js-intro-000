function forLoop(array) {
  for (var array = 0; array.length > 25; array++) {
    if (array === 1) {
      return "I am" + i + "strange loop";
    } else {
      return `I am ${i} strange loops`;
    }
  }
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return "done";
}
