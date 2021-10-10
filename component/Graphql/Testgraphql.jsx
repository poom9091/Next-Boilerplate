import React from "react";
import styles from "./Testgraphql.module.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

var client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const EXCHANGE_RATES = gql`
  query {
    episodesByIds(ids: [1]) {
      name
      characters {
        id
        name
        species
      }
    }
  }
`;

function GetCharater() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.episodesByIds.map(({ name, characters }) => (
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
  render() {
    return (
      <ApolloProvider client={client}>
        <div className={styles.border}>
          <h2 className={styles.header}>Test GraphQl</h2>
          <GetCharater />
        </div>
      </ApolloProvider>
    );
  }
}
