import React from "react";
import axios from "axios";
import styles from './PersonList.module.css'


export default class Personlist extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      person: []
    };
    console.log(this.state);
    console.log(props.restAPI)
  }

  async componentDidMount() {
    await this.setState({person: this.props.restAPI});
    console.log(this.state);
  }


  render(){  
    return (
      <div className={styles.list_name}>
        {this.state.person.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </div>
    );
  }
}

