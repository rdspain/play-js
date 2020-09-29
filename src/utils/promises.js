const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a == 3 && b == 3) {
        reject("No me gusta esa suma");
      } else {
        resolve(a + b);
      }
    }, a * 1000);
  });
};

function test() {
  console.log("Inicio programa");
  const res = add(4, 5);
  console.log(res);
  console.log("Fin programa");
}
