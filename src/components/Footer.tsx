"use client"
import Link from 'next/link'
import React from 'react'
import Magnet from './Magnet'

const Footer = () => {
  return (
    <div className='overflow-hidden w-full p-2'>
      <div className='max-w-3xl mx-auto w-full border shadow-sm'>
        <div className='h-10 w-full flex items-center justify-center'>
          <h2 className='text-sm font-semibold text-muted-foreground'>Built by <Link href='https://github.com/prateeeksagar' target='_blank' className='underline'>Prateek</Link>. The source code is available on <Link href={"https://github.com/prateeeksagar/psdev"} target='_blank' className='underline'>github</Link></h2>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
