import React from 'react'
import { Link } from "react-router-dom"
import { SideNav } from './SideNav'
export const Header = () => {
  return (
    <nav className='navbar fixed-top'>
      <Link to="/" className='navbar-brand d-flex align-items-center fredoka_ff'>Flickbase</Link>
      <SideNav />
    </nav>
  )
}
