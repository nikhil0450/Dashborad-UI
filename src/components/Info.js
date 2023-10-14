import React from 'react'
import "./info.css"

export default function info() {
  return (
   <>
    <h3 className='head'>Sales Information</h3> 
    <div className='info2'>
        <div className='info-box my-2'><label className='mb-2'>Customer</label><input type="search" placeholder='Enter Customer Name' /></div>
        <div className='info-box my-2'><label className='mb-2'>Invoice ID</label><input type="search" placeholder='Enter Invoice ID' /></div>
        <div className='info-box my-2'><label className='mb-2'>Start Date</label><input type="search" placeholder='Start Date' /></div>
        <div className='info-box my-2'><label className='mb-2'>End Date</label><input type="search" placeholder='End Date' /></div>

    </div>


   </>
  )
}
