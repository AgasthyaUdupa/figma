import React from 'react'
import LiveCursors from './Cursor/LiveCursors'
import { useMyPresence, useOthers } from '@/liveblocks.config'

const Live = () => {
    const others = useOthers() 
    const []= useMyPresence()
  return (
    <div>  <LiveCursors others={others} /></div>
  
  )
}

export default Live