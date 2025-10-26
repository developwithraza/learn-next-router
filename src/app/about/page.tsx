'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function About() {
  const router = useRouter()
  return (
    <div>
      <p>About</p>
      <button className=' p-2 rounded-full px-4 m-2 bg-blue-500 text-white' onClick={() => router.push('/')}>Go to home</button>
    </div>
  )
}

export default About