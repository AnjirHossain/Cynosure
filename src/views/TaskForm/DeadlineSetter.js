import React from "react";
import moment from 'moment';
import { TimePicker, DatePicker } from "antd";
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

/**
 * - time picker
 * - date picker
 */
const DeadlineSetter = ({
    onTimeChange,
    onDateChange,
    defaultTimeValue,
    defaultDateValue
}) => {
    return <div>
        Add a deadline
        <fieldset>
          <label>Time: </label>
          <TimePicker defaultValue={defaultTimeValue} size="large" use12Hours onChange={onTimeChange} format="hh:mm" />
        </fieldset>
        <fieldset>
          <label>Date: </label>
          <DatePicker size="large" onChange={onDateChange} format="MM/DD/YYYY" showToday={true} />
        </fieldset>
      </div>;
}

export default DeadlineSetter;;