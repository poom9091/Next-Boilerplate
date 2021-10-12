/* eslint no-use-before-define: 0 */  // --> OFF
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Boilerplate from  '../component/Boilerplate_SSR/Boilerplate'
import Testgraphql from '../component/Graphql/Testgraphql' 
import Buttontest from '../tests/Buttontest/Buttontest'
import RestAPI from '../component/RestAPI_SSR/RestAPI'
import Personinput from '../component/RestAPI_SSR/PersonInput/PersonInput'
import Personlist  from '../component/RestAPI/PersonList/PersonList'
import Title from '../component/Title/title'
import Link from 'next/link'
import ListLayout from '../component/ListLayout/LiatLayout'


var ep = Math.floor(Math.random() * 5)+1;

export default function Home() {
  return (
    <div>
      <Boilerplate>
        <Title title='Nextjs' subtitle='CSR'/>
        <Buttontest  label="click me plase"/>
        <ListLayout side="w-2/3">
          <h2>Test RestAPI</h2>
          <Personinput />
          <Personlist />
        </ListLayout> 
        <ListLayout side="w-1/3">
            <h2>Test GraphQl</h2>
            <div className="text-center f">
              <h1 className={styles.center}> Rick and Morty </h1>
              <h1 className={styles.center}>-- Episodes : {ep.toString()} --</h1>
            </div>
            <Testgraphql ep={ep}/>
        </ListLayout>
      </Boilerplate>
    </div>
  
    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h2>Documentation &rarr;</h2>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h2>Learn &rarr;</h2>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/master/examples"
    //         className={styles.card}
    //       >
    //         <h2>Examples &rarr;</h2>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //       >
    //         <h2>Deploy &rarr;</h2>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <span className={styles.logo}>
    //         Personlist<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>
  )
}
