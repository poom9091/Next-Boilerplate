/* eslint no-use-before-define: 0 */  // --> OFF
import 'tailwindcss/tailwind.css';
import styles from '../styles/Home.module.css';
import Boilerplate from  '../components/Boilerplate_SSR/Boilerplate';
import Testgraphql from '../components/Graphql_SSR/Testgraphql' ;
import Buttontest from '../tests/Buttontest/Buttontest';
import Personinput from '../components/RestAPI_SSR/PersonInput/PersonInput';
import Personlist  from '../components/RestAPI_SSR/PersonList/PersonList';
import Title from '../components/Title/title';
import ListLayout from '../components/ListLayout/LiatLayout';
import React from 'react';
import axios from 'axios';
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
        <Title 
          title='Nextjs' 
          subtitle='SSR' 
          TitleColor='text-white' 
          TitleSize='text-9xl' 
          SubTitleColor= "text-gray-600"
          SubTitleSize= "text-6xl"
        />
        <Buttontest  label="click me plase"/>
        <ListLayout side="w-2/3">
          <h2>Test RestAPI</h2>
          <Personinput />
          <Personlist restAPI={restAPI}/>
        </ListLayout> 
        <ListLayout side="w-1/3">
            <h2>Test GraphQl</h2>
            <div className="text-center f">
              <h1 className={styles.center}> Rick and Morty </h1>
              <h1 className={styles.center}>-- Episodes : 1 --</h1>
            </div>
            <Testgraphql graphQL={graphQL}/>
        </ListLayout>
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
          image
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