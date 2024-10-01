import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import ArticlesList from '../components/ArticlesList/ArticlesList'

const UserPage = () => {
  return (
    <section className='flex w-screen justify-end relative'>
      <Sidebar />
      <ArticlesList />
    </section>
  )
}

export default UserPage