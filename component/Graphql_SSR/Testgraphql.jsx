import React from "react";
import styles from "./Testgraphql.module.css";

function GetCharater(props) {
  // const { loading, error, data } = useQuery(EXCHANGE_RATES);
  console.log(props.data);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  return props.data.episodesByIds.map(({ name, characters }) => (
    <div key={name}>
      <div className={styles.center}> Rick and Morty </div>
      <div className={styles.center}>-- Episodes : {name} --</div>
      <div className={styles.list}>
        {characters.map(({ name, species }) => (
          <div className={styles.list_name} classkey={name}>
            Name : {name} / {species}
          </div>
        ))}
      </div>
    </div>
  ));
}

export default class Testgraphql extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props.graphQL)
  }
  render() {
    return (
      // <ApolloProvider client={client}>
        <div className={styles.border}>
          <h2 className={styles.header}>Test GraphQl</h2>
          <GetCharater data={this.props.graphQL}/>
        </div>
      // {/* </ApolloProvider> */}
    );
  }
}
