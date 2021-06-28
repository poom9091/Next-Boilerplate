import React from "react";
import axios from "axios";
import styles from './PersonList.module.css'
export default class Personlist extends React.Component {
  state = {
    person: [],
  };

  async componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({ person: res.data });
    });
  }

  render() {
    return (
      <div className={styles.list_name}>
        {this.state.person.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </div>
    );
  }
}

