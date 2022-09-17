import styles from "./Analytics.module.scss";
// import Columns from "./Charts/Columns";
import { WiStars } from "react-icons/wi";
// import Pie from "../Analytics/Charts/Pie";
import Header from "../Common/Header";
// import { categories } from "../../Service/ExpenseService";
// import { data, cat } from "../../Service/data";
import React, { useEffect, useState } from "react";
import BarChart from "./Charts/BarChart";

const Statistics = ({ sum, percentage, title }) => {
  return (
    <div className={styles.statistic}>
      <div className={styles.overview}>
        <span className={styles.sum}>{sum}</span>
        <span
          className={`${styles.percentage} ${
            percentage > 7 ? styles.percetange_green : styles.percentage_orange
          }`}
        >{`${percentage > 0 ? "+" : ""}${percentage}%`}</span>
      </div>
      <h3 className={styles.statistic_title}>{title}</h3>
    </div>
  );
};

const Analytics = () => {
  const [edit, setEdit] = useState(false);

  return (
    <main>
      <Header message="Average Expenses" ficon={<WiStars />} />
      <div className={styles.title}>
        <h2>Bar Chart</h2>
      </div>
      <div
        class="btn-group"
        role="group"
        aria-label="Button group with nested dropdown"
      >
        <div class="btn-group" role="group">
          <button
            type="button"
            class="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Chart
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Dropdown link
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.pie}>
        <BarChart />
      </div>
    </main>
  );
};

export default Analytics;
