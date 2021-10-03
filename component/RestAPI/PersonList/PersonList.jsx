import React from "react";
import axios from "axios";
import styles from './PersonList.module.css'

export default function Personlist(personobj) {
  
  console.log('Hello')
  console.log(personobj)
  
  return (
    <div className={styles.list_name}>
      {personobj.person.map((person) => (
        <li key={person.id}>{person.name}</li>
      ))}
    </div>
  );
}

export default class Personlist extends React.Component({personobj}){
  state = {
    person: [],
  };

  async componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({ person: res.data });
    });
  }

  render(){  
    return (
      <div className={styles.list_name}>
        {this.personobj.person.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </div>
    );
  }
}

// Personlist.getInitialProps = async () => {
//   personobj = {
//     person: [],
//   };  
//   const personobj= await axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
//     this.setState({ person: res.data });
//   });
//   return personobj
// }