import React from 'react'
import Box from './boxes/Box'
import Creators from './creators/Creators'
import Header from './header/Header'
import Plan from './plan/Plan'
import Topic from './topic/Topic'

const Home = () => {
  return (
    <div>
        <Header/>
        <Topic/>
        <Box/>
        <Creators/>
        <Plan/>
    </div>
  )
}

export default Home