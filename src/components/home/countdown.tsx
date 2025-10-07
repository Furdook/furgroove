import { useCallback, useEffect, useState } from 'react'
import CountdownHelper from '@/components/home/countdown-helper.ts'

interface Props {
  value: number
  label: string
}

const TimeSegment = ({ value, label }: Props) => (
  <div className="flex flex-col items-center bg-primary-700/75 p-4 sm:p-6 rounded-xl shadow-lg w-20 sm:w-28 mx-1">
    <div className="text-4xl sm:text-5xl font-extrabold text-primary-50">
      {String(value || 0).padStart(2, '0')}
    </div>
    <div className="text-xs sm:text-sm font-medium uppercase text-primary-300 mt-1">{label}</div>
  </div>
)

const targetDateString = '2025-10-25T20:00'

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(CountdownHelper.getTimeLeft(targetDateString))

  const updateCountdown = useCallback(() => {
    setTimeLeft(CountdownHelper.getTimeLeft(targetDateString))
  }, [targetDateString])

  useEffect(() => {
    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)

    return () => clearInterval(timer)
  }, [updateCountdown])

  const timerComponents = []

  if (timeLeft.days !== undefined) {
    timerComponents.push(<TimeSegment key="days" value={timeLeft.days} label="Days" />)
    timerComponents.push(<TimeSegment key="hours" value={timeLeft.hours} label="Hours" />)
    timerComponents.push(<TimeSegment key="minutes" value={timeLeft.minutes} label="Minutes" />)
    timerComponents.push(<TimeSegment key="seconds" value={timeLeft.seconds} label="Seconds" />)
  }
  return (
    <div className="flex max-sm:justify-center ">
      {timerComponents.length ? (
        timerComponents
      ) : (
        <a
          target="_blank"
          href="https://eventix.shop/83fg7sdc"
          rel="noreferrer"
          className="bg-accent-pink font-medium text-primary-900 hidden max-w-96 rounded-md px-2.5 py-2 text-center sm:block"
        >
          Purchase ticket
        </a>
      )}
    </div>
  )
}
