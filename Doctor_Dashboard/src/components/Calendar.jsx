// Calendar.js
import { useState } from 'react';
import { format, getDate, getDaysInMonth } from 'date-fns';

const Calendar = () => {
  const currentMonth = 7; // August (0-based index)
  const currentYear = 2024;
  const today = new Date(currentYear, currentMonth, 22); // August 22, 2024
  const daysInMonth = getDaysInMonth(today);
  const [selectedDate, setSelectedDate] = useState(today);

  const renderDaysOfWeek = () => {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return daysOfWeek.map((day) => (
      <div key={day} className="text-center font-semibold text-gray-600">
        {day}
      </div>
    ));
  };

  const renderCalendarDays = () => {
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const isToday = getDate(date) === 22; // Highlight August 22

      days.push(
        <div
          key={i}
          className={`flex items-center justify-center w-10 h-10 cursor-pointer rounded-lg ${
            isToday ? 'bg-purple-600 text-white' : 'text-gray-800'
          } hover:bg-purple-200`}
          onClick={() => setSelectedDate(date)}
        >
          {i}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-700">
          {format(today, 'MMMM yyyy')}
        </h2>
        <select className="border border-gray-300 rounded-md text-gray-600">
          <option value={currentYear}>{currentYear}</option>
        </select>
      </div>
      <div className="grid grid-cols-7 gap-2">{renderDaysOfWeek()}</div>
      <div className="grid grid-cols-7 gap-2 mt-2">{renderCalendarDays()}</div>
    </div>
  );
};

export default Calendar;
