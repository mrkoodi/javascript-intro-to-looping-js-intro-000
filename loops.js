function forLoop(array) {
  for (var i = 0; i < array.length; i++) {
    if (i === 1) {
        array.push("Iam 1 strange loop");
    }
  }

    return array[i];
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return "done";
}
