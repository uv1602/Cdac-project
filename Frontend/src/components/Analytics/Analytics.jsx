import styles from "./Analytics.module.scss";
import Line from "./Charts/Line";
import { WiStars } from "react-icons/wi";
import Pie from "../Analytics/Charts/Pie";
import Header from "../Common/Header";
import { useState, useEffect } from "react";
import { categories } from "../../Service/ExpenseService";
import { data, cat } from "../../Service/data";

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
  return (
    <main>
      <Header message="Average Expenses" ficon={<WiStars />} />
      <div className={styles.title}>
        <h2>Pie Chart</h2>
      </div>
      <div className={styles.pie}>
        <Pie data={data} cat={cat} />
      </div>
    </main>
  );
};

export default Analytics;
