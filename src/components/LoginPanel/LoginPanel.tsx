import React, { ReactElement } from 'react'
import './LoginPanel.style.scss'

interface LoginPanelProps {
  userName: string
}

const LoginPanel = ({ userName }: LoginPanelProps): ReactElement => {
  return (
    <div className="login-panel">
      <span>{userName}</span>
      <button className="panel-button">My posts</button>
      <button className="panel-button">Leave</button>
    </div>
  )
}

export default LoginPanel
