import React from "react";
import axios from "axios";
import styles from './PersonList.module.css';
import Carduser from "../../Carduser/Carduser";
import faker from 'faker';

export default class Personlist extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      person: [],
      personSSR: []
    };
    this.setState({personSSR: props.restAPI});
    console.log(this.state);
    console.log(props.restAPI);
  }

  async componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({ person: res.data });
      console.log(this.state);
    });
    // await this.setState({person: this.props.restAPI});
    // console.log(this.state);
  }


  render(){  
    return (
      <div className={styles.list_name}>
        {this.state.person.map((person) => (
          <div key={person.id}>
            <Carduser 
              name={person.name} 
              username={person.username} 
              phone={person.phone} 
              email={person.email} 
              avatar={faker.image.avatar()}
            /> 
          </div>
        ))}
      </div>
    );
  }
}
