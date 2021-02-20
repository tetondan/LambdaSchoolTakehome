import React from "react";
import { format, isBefore, subDays } from "date-fns";
import styles from "../styles/Assignment.module.css";

export default function Assignment({ assignment }) {
  const { title, score, due, submitted } = assignment;
  const pastDue = isBefore(new Date(due), subDays(new Date(), 30));
  const passing = score >= 80;
  return (
    <div key={title} className={styles.assignment}>
      <h2>{title}</h2>
      <div className={styles.scoreContainer}>
        {submitted ? (
          <div>
            <span className="score">Score: {score}%</span>
            <div>
              <span>STATUS: </span>
              {passing ? (
                <span className={styles.passed}>PASSED</span>
              ) : (
                <span className={styles.failed}>FAILED</span>
              )}
            </div>
          </div>
        ) : (
          <span>Not yet submitted</span>
        )}
        <span className="due">Due: {format(new Date(due), "M/d/y")}</span>
        <div className="submit">
          {passing ? (
            <div></div>
          ) : pastDue ? (
            <span className="closed">Closed</span>
          ) : (
            <button className="submit-button">
              {submitted ? "Resubmit" : "Submit"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
