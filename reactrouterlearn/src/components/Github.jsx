import { data } from 'autoprefixer'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Github = () => {

  const [usekar, setUsekar] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users/Zouziszzm").then(res => res.json()).then(data => setUsekar(data))
  }, [])

  return (
    <div className='text-center text-3xl bg-red-400 text-white'>Github followers: {usekar.followers}</div>
  )
}

export default Github
