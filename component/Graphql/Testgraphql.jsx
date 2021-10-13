import React from "react";
import Carduser from '../Carduser2/Carduser2';
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
        image
      }
    }
  }
`;

function GetCharater() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.episodesByIds.map(({ name, characters}) => (
    <div key={name}>
      <div className="flex flex-wrap space-x-3 justify-center py-5"> 
        {characters.map(({ name, species ,image }) => (
          <div className="" classkey={name}>
            <Carduser 
              name={name} 
              species={species} 
              image={image} 
              imageWidht="w-36" 
              imageHight="h-36" 
              colortheme="blue-400"
            />
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
          <GetCharater />
      </ApolloProvider>
    );
  }
}
