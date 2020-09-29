const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, a * 1000);
  });
};

add(3, 6).then((res) => console.log(res));
add(3, 1).then((res) => console.log(res));
add(0, 1).then((res) => console.log(res));
