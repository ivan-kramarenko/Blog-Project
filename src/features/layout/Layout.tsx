import React, { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import './Layout.style.scss'

const Layout = (): ReactElement => (
  <>
    <Navbar />
    <div className="layout">
      <Outlet />
    </div>
  </>
)

export default Layout
