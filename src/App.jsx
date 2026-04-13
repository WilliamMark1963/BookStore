import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import HomePage from './Components/HomePage'
import { Outlet } from 'react-router-dom'
import {Provider} from 'react-redux'
import appStore from './Utilities/appStore'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Provider store={appStore}>
      <Header/>
      <Outlet/>
      <Footer/>
      </Provider>

    </div>
  )
}

export default App
