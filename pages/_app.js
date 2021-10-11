/* eslint no-use-before-define: 0 */  // --> OFF
import 'tailwindcss/tailwind.css'
import NavBar from '../component/NavigationBar/NavigationBar'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
