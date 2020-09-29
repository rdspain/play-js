function add_old(a, b) {
  return a + b;
}

const add_old_prom1 = (a, b) => {
  return Promise.resolve(a + b);
};

const add_function = (a, b) => {
  return new Promise(function (resolve, reject) {
    if (a == 3 && b == 3) {
      reject("Ha ocurrido un error");
    } else {
      resolve(a + b);
    }
  });
};

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a == 3 && b == 3) {
      reject("Ha ocurrido un error mu malo");
    } else {
      resolve(a + b);
    }
  });
};

add(3, 3)
  .then((response) => {
    console.log(response);
  })
  .catch((reason) => {
    console.log(reason);
  });
