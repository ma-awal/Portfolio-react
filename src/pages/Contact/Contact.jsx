import React from 'react'
 
 import Card from '../../components/card/Card'
 import Adress from '../../components/address/Address'
 
 import Connect from '../../components/connect/Connect'
const Contact = () => {
  return (
    <>
       <>
       <Card name={"Contact"}/>
       <section className='mt-3 mt-md-4 mt-lg-5'>
       <Adress/>
       </section>
 
       <section className='mt-3 mt-md-4 mt-lg-5'>
       <Connect/>
       </section>
    </>
    </>
  )
}

export default Contact



 