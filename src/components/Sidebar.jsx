import React from 'react'
import { Navbar } from '../components/Navbar'
import { Chats } from './Chats'
import { Search } from './Search'

export const Sidebar = () => {
  return (
    <div className="sidebar">
        <Navbar/>
        <Search/>
        <Chats/>
    </div>
  )
}
