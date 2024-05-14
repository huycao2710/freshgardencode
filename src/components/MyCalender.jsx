import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../../src/Dashboard.css";

function MyCalendar() {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <div>
            <Calendar
                onChange={onChange}
                value={date}
                className="custom-calendar"
            />
        </div>
    );
}

export default MyCalendar;
