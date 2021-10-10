import React from "react";
import axios from "axios";
import Input from "../../../stories/Input/Input"
import Button from "../../../stories/Button/Button";
import styles from './PersonInput.module.css'
export default class Personinput extends React.Component {
  state = {
    name: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      name: this.state.name,
  };

    axios
      .post("https://jsonplaceholder.typicode.com/users", { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({ person: res.data });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.flex_inline} >
        <label className={styles.content_center}> Person name:</label>
        <Input   
          className={styles.text_box}   
          type="text"
          name="name"
          size="small"
          placeholder="Type something"
          onChange={this.handleChange}
        />
        <Button
          bgcolor="green"
          boderrd="2rem"
          color="#fff"
          fontsize="14px"
          height="2rem"
          padding="0.5rem"
          text="Post API"
          width="5.5rem"
        >
          Post API
        </Button>
      </form>
    );
  }
}
