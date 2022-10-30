import React, { ReactElement } from 'react'
import LoginPanel from '../../components/LoginPanel/LoginPanel'
import './Navbar.style.scss'

const Navbar = (): ReactElement => {
  const isLogged = true
  const userName = 'Ivan'
  return (
    <>
      <nav className="navbar">
        <span>BlogSite</span>
        {
          //@ts-expect-error
          isLogged === false ? (
            <button className="login-button">Login / Register</button>
          ) : (
            <LoginPanel {...{ userName }} />
          )
        }
      </nav>
    </>
  )
}

export default Navbar
