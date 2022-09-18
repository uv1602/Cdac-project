import styles from "./Analytics.module.scss";
// import Columns from "./Charts/Columns";
import { WiStars } from "react-icons/wi";
// import Pie from "../Analytics/Charts/Pie";
import Header from "../Common/Header";
import React, { useEffect, useState } from "react";
import BarChart from "./Charts/BarChart";
import PieChart from "./Charts/PieChart";
import { categories } from "../../Service/ExpenseService";

const Analytics = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    categories(setData);
  }, []);

  return (
    <main>
      <Header message="Average Expenses" ficon={<WiStars />} />
      <div className={styles.title}>
        <h2>Bar Chart</h2>
      </div>

      <div className={styles.pie}>
        <BarChart bar={data} />
        <PieChart pie={data} />
      </div>
    </main>
  );
};

export default Analytics;
