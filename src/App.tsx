import React, { ReactElement } from 'react'
import ArticleItem from './features/article/articleItem/ArticleItem'
import Navbar from './features/navbar/Navbar'

const App = (): ReactElement => {
  return (
    <div className="App">
      <ArticleItem />
    </div>
  )
}

export default App
