import { useState } from 'react'
import './App.css'
import ReactDom from 'react-dom'
import Navbar from './Navbar/Navbar'
import Content from './content/Content'
import Tabel from './tabel/Projectlist'
import { Provider } from 'react-redux'
import store from './redux/projectStore'


function App() {
 

  return (
    <Provider store={store}>

    <Navbar/>
    <Content/>
    <Tabel/>
 
    </Provider>

  
  )
}

export default App
