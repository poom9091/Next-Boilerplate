/* eslint no-use-before-define: 0 */  // --> OFF
import styles from '../styles/Home.module.css'
import Boilerplate from '../component/Boilerplate/Boilerplate'
import React from 'react'
import axios from 'axios'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

function SSR({restAPI,graphQL}){
  console.log({graphQL});
  console.log({restAPI});
  return <Boilerplate restAPI={restAPI} graphQL={graphQL}/>
}
// ================================================================================
async function getREST(){
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return await res.data;
}

// ================================================================================

var client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

async function getGraphql(){
  const { loading, error, data } = await client.query({
    query:gql`
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
  ` }); 
  return data
}

export async function getServerSideProps(){
  const graphQL = await getGraphql(); 
  const restAPI = await getREST(); 
  return {
    props: { restAPI , graphQL }
  }; 
}

export default SSR