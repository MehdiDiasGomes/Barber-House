"use client"

import * as React from "react"
import ReactCalendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

import { cn } from "@/lib/utils"

interface CalendarProps {
  value?: Date
  onChange?: (date: Date) => void
  className?: string
  minDate?: Date
  maxDate?: Date
  tileDisabled?: (date: Date) => boolean
}

function Calendar({
  value,
  onChange,
  className,
  minDate,
  maxDate,
  tileDisabled
}: CalendarProps) {
  return (
    <ReactCalendar
      onChange={onChange}
      value={value}
      minDate={minDate}
      maxDate={maxDate}
      tileDisabled={tileDisabled}
      className={cn("react-calendar-custom", className)}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
