import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'

function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span>
      {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
    </span>
  )
}

export default function TopBar() {
  return (
    <div className="flex items-center justify-between text-xs text-secondary mb-3 px-1">
      <span>{profile.location}</span>
      <Clock />
    </div>
  )
}
