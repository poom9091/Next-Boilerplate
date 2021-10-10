import React from "react";
import axios from "axios";
import styles from './PersonList.module.css'


export default class Personlist extends React.Component{
  state = {
    person: [],
  };

  async componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({ person: res.data });
      console.log(this.state);
    });
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

// const fetchData = async () =>
//   await axios.get("https://jsonplaceholder.typicode.com/users")
//   .then(res => ({
//     people: res.data
//   }))
//   .cacth(() => ({
//     people: null
//   })
// );

// export default function Personlist({people}) {
  
//   console.log({people})
//   // state = {personobj}

//   return (
//     <div className={styles.list_name}>
//       {/* {this.state.person.map((person) => (
//         <li key={person.id}>{person.name}</li>
//       ))} */}
//     </div>
//   );
// }

// Personlist.getServerSideProp = async () => {
//   const data = await fetchData();
//   return { props: data }
// }