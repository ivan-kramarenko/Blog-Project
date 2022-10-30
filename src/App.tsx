import React, { ReactElement } from 'react'
import ArticleItem from './features/article/articleItem/ArticleItem'
import Layout from './features/layout/Layout'

const App = (): ReactElement => {
  return (
    <div className="App">
      <Layout />
    </div>
  )
}

export default App
