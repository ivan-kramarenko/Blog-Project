import React, { ReactElement } from 'react'
import LoginPanel from './components/LoginPanel/LoginPanel'
import ArticleItem from './features/article/articleItem/ArticleItem'
import Navbar from './features/navbar/Navbar'

const App = (): ReactElement => {
  return (
    <div className="App">
      <LoginPanel userName={'Ivan'} />
      <ArticleItem />
    </div>
  )
}

export default App
