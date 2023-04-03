import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Rightbar from '../components/rightbar/Rightbar'

export default function Main({children}) {
  return (
    <div className='main-container flex'>

      <Sidebar />
      {children}
      <Rightbar />

    </div>
  )
}
