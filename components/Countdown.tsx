'use client'

import { useState, useEffect } from 'react'
import { CountdownTime } from '@/types'

interface CountdownProps {
  targetDate: Date
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = (): CountdownTime => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance < 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const formatNumber = (num: number, length: number = 2) => {
    return String(num).padStart(length, '0')
  }

  return (
    <div className="flex gap-4 mt-8">
      <div className="text-center bg-white/10 backdrop-blur-md rounded-lg p-4 min-w-[80px]">
        <div className="text-4xl font-bold text-white">
          {formatNumber(timeLeft.days, 3)}
        </div>
        <div className="text-sm text-white/90 mt-2">Dias</div>
      </div>
      <div className="text-center bg-white/10 backdrop-blur-md rounded-lg p-4 min-w-[80px]">
        <div className="text-4xl font-bold text-white">
          {formatNumber(timeLeft.hours)}
        </div>
        <div className="text-sm text-white/90 mt-2">Horas</div>
      </div>
      <div className="text-center bg-white/10 backdrop-blur-md rounded-lg p-4 min-w-[80px]">
        <div className="text-4xl font-bold text-white">
          {formatNumber(timeLeft.minutes)}
        </div>
        <div className="text-sm text-white/90 mt-2">Minutos</div>
      </div>
      <div className="text-center bg-white/10 backdrop-blur-md rounded-lg p-4 min-w-[80px]">
        <div className="text-4xl font-bold text-white">
          {formatNumber(timeLeft.seconds)}
        </div>
        <div className="text-sm text-white/90 mt-2">Segundos</div>
      </div>
    </div>
  )
}

