"use client"

import ReactCalendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

import { cn } from "@/lib/utils"

interface CalendarProps {
  value?: Date | null | [Date, Date]
  onChange?: (value: Date | null | [Date, Date]) => void
  className?: string
  minDate?: Date
  maxDate?: Date
  tileDisabled?: (args: { date: Date; view: string }) => boolean
}

function Calendar({
  value,
  onChange,
  className,
  minDate,
  maxDate,
  tileDisabled
}: CalendarProps) {
  const handleChange = (calendarValue: Date | null | [Date | null, Date | null]): void => {
    if (onChange) {
      onChange(calendarValue as Date | null | [Date, Date])
    }
  }

  const handleTileDisabled = (args: { date: Date; view: string }): boolean => {
    if (!tileDisabled) return false
    return tileDisabled(args)
  }

  return (
    <ReactCalendar
      onChange={handleChange}
      value={value}
      minDate={minDate}
      maxDate={maxDate}
      tileDisabled={handleTileDisabled}
      className={cn("react-calendar-custom", className)}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
