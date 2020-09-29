// import axios from "axios";
let axios = require("axios");

function columnName(data) {
  let tableOut = [];
  data.forEach((item) => {
    tableOut.push(item.name);
  });
  return tableOut;
}

axios
  .get("http://10.232.31.196/vtable/AREA/get_objects_fast/")
  .then((response) => {
    return response.data.data.rows;
  })
  .then(columnName)
  .then((table) => {
    table.forEach((value) => console.log(value));
  })
  .catch((reason) => {
    console.log(reason.message);
  });

console.log("FIN");
