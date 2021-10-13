/* eslint no-use-before-define: 0 */  // --> OFF
import 'tailwindcss/tailwind.css'
import NavBar from '../component/NavigationBar/NavigationBar'
import Menu from '../component/NavigationBar/Manu'


function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-blue-500">
      <NavBar
        NavbarName="Boilerplate Next"
        NavbarColor="text-white"
      >
        <Menu Path="/" Text="CSR" TextColor="text-white" ColorHover="bg-gray-400"/>
        <Menu Path="/ssr" Text="SSR" TextColor="text-white" ColorHover="bg-gray-400"/>
        <Menu Path="/ssg" Text="CSR" TextColor="text-white" ColorHover="bg-gray-400"/>
      </NavBar>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
