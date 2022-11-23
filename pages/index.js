/* eslint no-use-before-define: 0 */  // --> OFF
// import 'tailwindcss/tailwind.css';

import styles from '../styles/Home.module.css';
import Boilerplate from '../components/Boilerplate_SSR/Boilerplate';
import Testgraphql from '../components/Graphql/Testgraphql';
import Buttontest from '../tests/Buttontest/Buttontest';
import Personinput from '../components/PersonInput/PersonInput';
import Personlist from '../components/RestAPI/PersonList/PersonList';
import Title from '../components/Title/title';
import ListLayout from '../components/ListLayout/LiatLayout';

export default function Home() {
  return (
    <div>
      <Boilerplate>
        <Title
          title='Nextjs blue'
          subtitle='Boilerplate'
          TitleColor='text-white'
          TitleSize='text-9xl'
          SubTitleColor="text-gray-600"
          SubTitleSize="text-6xl"
        />
        <Buttontest label="click me plase" />
        <ListLayout side="w-2/3">
          <h1>Test RestAPI</h1>
          <Personinput />
          <Personlist />
        </ListLayout>
        <ListLayout side="w-1/3">
          <h1>Test GraphQl</h1>
          <div className="text-center f">
            <h1 className={styles.center}> Rick and Morty </h1>
            <h1 className={styles.center}>-- Episodes : 1 --</h1>
          </div>
          <Testgraphql ep="1" />
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
