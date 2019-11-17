import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const Dates = (props) => {

  if (props.currentStep !== 5) {
    return null
  }

  return (
    <div>
      <DayPicker
        selectedDays={props.dates}
        onDayClick={props.handleDateChange}
      />
    </div>
  );
  
}

export default Dates;
