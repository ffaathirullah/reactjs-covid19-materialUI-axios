import React from "react";
import { Card, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";

import styles from "./App.module.css";

class App extends React.Component {
  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
  }

  render() {
    return (
      <div className={styles.container}>
        <Card />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
