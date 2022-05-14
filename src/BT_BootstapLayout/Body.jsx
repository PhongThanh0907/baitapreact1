import React from 'react'
import Banner from './Banner'
import Item from './Item'

export default function Body() {
  return (
    <div>
        <Banner />
       <section className="pt-4">
  <div className="container px-lg-5">
    <div className="row gx-lg-5">
      <div className="col-lg-6 col-xxl-4 mb-5">
       <Item />
      </div>
      <div className="col-lg-6 col-xxl-4 mb-5">
      <Item />
      </div>
      <div className="col-lg-6 col-xxl-4 mb-5">
      <Item />
      </div>
      <div className="col-lg-6 col-xxl-4 mb-5">
      <Item />
      </div>
      <div className="col-lg-6 col-xxl-4 mb-5">
      <Item />
      </div>
      <div className="col-lg-6 col-xxl-4 mb-5">
      <Item />
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
