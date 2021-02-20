import React from "react";
import Image from "next/image";
// import Assignment from "../components/Assignment";
import styles from "../styles/Student.module.css";

export default function StudentPage({ name, assignments }) {
  return (
    <div className={styles.container}>
      <Image
        src="/LambdaLogo.png"
        alt="Lambda School logo"
        width="224px"
        height="61px"
      />
      {/* <div className={styles.studentInfo}>
        <h1 className={styles.studentName}>{name}</h1>
        <span className={styles.passed} id="passedRate">
          Assignments Passed: {assignments.filter((a) => a.score >= 80).length}/
          {assignments.length}
        </span>
      </div>
      {assignments.map((assignment) => {
        return <Assignment assignment={assignment} key={assignment.id} />;
      })} */}
    </div>
  );
}

export async function getServerSideProps(context) {
  // The next line would be replaced with a call to a server or database.
  const data = require("../data");
  return {
    props: data,
  };
}
