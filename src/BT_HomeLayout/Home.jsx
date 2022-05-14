import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Slidebar from './Slidebar'
import Content from './Content'

export default function Home() {
  return (
    <div>
        <Header />
        <div className='d-flex'>
            <div className='w-25'>
                <Slidebar />
            </div>
            <div className='w-75'>
                <Content />
            </div>
        </div>
        <Footer />
    </div>
  )
}
