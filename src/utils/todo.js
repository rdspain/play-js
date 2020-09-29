import axios from "axios";

axios.get("https://api.herneli.com/todos").then((res) => {
  let list = res.data.map((item) => item.task);
  console.log(list);
});
