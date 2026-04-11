import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import HomePage from './Components/HomePage'
import { Outlet } from 'react-router-dom'
import {Provider} from 'react-redux'
import appStore from './Utilities/appStore'

function App() {
  return (
    <div>
      <Provider store={appStore}>
      <Header/>
      <Outlet/>
      </Provider>

    </div>
  )
}

export default App
