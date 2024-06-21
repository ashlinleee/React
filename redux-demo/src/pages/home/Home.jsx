import React from "react";
import { useSelector } from "react-redux";
import styles from "../home/Home.module.css";
import Navigation from "../../components/Navigation";

function Home() {
  let username = useSelector((state) => {
    return state.user.value;
  });

  return (
    <>
      <Navigation />
      <h1 className={styles.container}>Home Page {username}</h1>
    </>
  );
}

export default Home;
