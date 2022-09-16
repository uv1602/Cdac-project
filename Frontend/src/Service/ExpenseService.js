import { data } from "./data";
import * as http from "./httpService";

const expense = (expense) => {
  http
    .post("/add", expense)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const show = (setYesterday) => {
  http
    .get("/show")
    .then((response) => {
      if (response.data["status"] == "success") {
        setYesterday(response.data["result"]);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// const cat = [];

const todayExpense = (setToday) => {
  http
    .get("/show/today")
    .then((response) => {
      if (response.data["status"] == "success") {
        setToday(response.data["result"]);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const yesterdayExpense = (setYesterday) => {
  http
    .get("/show/yesterday")
    .then((response) => {
      if (response.data["status"] == "success") {
        setYesterday(response.data["result"]);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const categories = () => {
  http
    .get("/show/categories")
    .then((response) => {
      if (response.data["success"]) {
        const { categories, price } = response.data["result"];
        console.log(categories, price, 55);
        return { categories, price };
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export { expense, show, todayExpense, yesterdayExpense, categories };
