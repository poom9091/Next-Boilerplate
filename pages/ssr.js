/* eslint no-use-before-define: 0 */  // --> OFF
import styles from '../styles/Home.module.css'
import Boilerplate from  '../component/Boilerplate_SSR/Boilerplate'
import Testgraphql from '../component/Graphql_SSR/Testgraphql' 
import Buttontest from '../tests/Buttontest/Buttontest'
import RestAPI from '../component/RestAPI_SSR/RestAPI'
import Personinput from '../component/RestAPI_SSR/PersonInput/PersonInput'
import Personlist  from '../component/RestAPI_SSR/PersonList/PersonList'
import React from 'react'
import axios from 'axios'
import {
  ApolloClient,
  InMemoryCache,
  gql,
} from "@apollo/client";
function SSR({restAPI,graphQL}){
  console.log(restAPI);
  return (
    <div>
      <Boilerplate>
        <div>Boilderplate Next</div>
        <Buttontest  label="click me plase"/>
        <RestAPI>
          <Personinput />
          <Personlist restAPI={restAPI}/>
        </RestAPI> 
        <Testgraphql  graphQL={graphQL}/>
      </Boilerplate>
    </div>
  )  
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