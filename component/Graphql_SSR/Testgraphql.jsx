import React from "react";
import Carduser from "../Carduser2/Carduser2";
import styles from "./Testgraphql.module.css";

function GetCharater(props) {
  // const { loading, error, data } = useQuery(EXCHANGE_RATES);
  console.log(props.data);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  return props.data.episodesByIds.map(({ name, characters }) => (
     <div key={name}>
      <div className="flex flex-wrap space-x-3 justify-center "> 
        {characters.map(({ name, species ,image }) => (
          <div classkey={name}>
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
  constructor(props){
    super(props);
    console.log(this.props.graphQL)
  }
  render() {
    return (
      // <ApolloProvider client={client}>
          <GetCharater data={this.props.graphQL}/>
      // {/* </ApolloProvider> */}
    );
  }
}
