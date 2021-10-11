import React from "react";
import axios from "axios";
import Input from "../../../stories/Input/Input"
import Button from "../../../stories/Button/Button";
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
      <form onSubmit={this.handleSubmit} className=" flex place-content-evenly">
        <label className=" font-semibold text-xl p-2"> Person name:</label>
        <Input   
          className=" w-2/4 border-2 border-blue-600 rounded-md p-2 focus:ring-2 focus:ring-blue-600 "
          type="text"
          name="name"
          size="small"
          placeholder="Type something"
          onChange={this.handleChange}
        />
        <Button
          className="0"
          bgcolor="#2563EB"
          boderrd="0.8rem"
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
