import React from 'react'
import Card from '../../components/card/Card'
import Connect from '../../components/connect/Connect'
import Skill from '../../components/skill/Skill'
import Project from '../../components/project/Project'
const Portfolio = () => {
  return (
    <>
      <Card name={"Portfolio"}/>
      <section className='mt-3 mt-md-4 mt-lg-5'>
       <Skill/>
       </section>
       <section className='mt-3 mt-md-4 mt-lg-5'>
       <Project/>
       </section>
      <section className='mt-3 mt-md-4 mt-lg-5'>
       <Connect/>
       </section>
    </>
  )
}

export default Portfolio
