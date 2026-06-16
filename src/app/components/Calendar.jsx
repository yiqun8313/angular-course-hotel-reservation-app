import { useState } from "react";
import "./Calendar.css";

const weekDays = ["日", "一", "二", "三", "四", "五", "六"];

function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );
  const [selectedDay, setSelectedDay] = useState(today.getDate());

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
  ];

  function changeMonth(amount) {
    setCurrentMonth(new Date(year, month + amount, 1));
    setSelectedDay(null);
  }

  return (
    <div className="calendar">
      <header className="calendar-header">
        <button onClick={() => changeMonth(-1)}>上一月</button>
        <h2>
          {year} 年 {month + 1} 月
        </h2>
        <button onClick={() => changeMonth(1)}>下一月</button>
      </header>

      <div className="calendar-grid">
        {weekDays.map((day) => (
          <strong key={day}>{day}</strong>
        ))}

        {days.map((day, index) => (
          <button
            key={index}
            className={day === selectedDay ? "selected" : ""}
            disabled={!day}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>

      {selectedDay && (
        <p>
          选择日期：{year}-{month + 1}-{selectedDay}
        </p>
      )}
    </div>
  );
}

export default Calendar;
