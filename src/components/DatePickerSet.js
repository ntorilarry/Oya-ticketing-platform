import React, { useState } from "react";
import 'antd/dist/antd.min.css'
import { DatePicker, Form } from "antd";
import moment from "moment";

function DatePickerSet() {
  const [dateRange, setDateRange] = useState([moment(), moment()]);
  return (
    <div className="sm:flex flex-wrap mx-2">
  <label className="my-auto mr-2">Filter by:</label>
        <DatePicker.RangePicker
          format="MMM Do, YYYY"
          value={dateRange}
          separator={"-"}
          onChange={(x) => {
            console.log(x);
            setDateRange(x);
          }}
          allowClear={false}
        />
      
    </div>
  );
}

export default DatePickerSet;
