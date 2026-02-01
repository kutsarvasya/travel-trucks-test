import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import s from "./DatePickerField.module.css";

function DatePickerField({ field, form }) {
  return (
    <DatePicker
      selected={field.value}
      onChange={(date) => {
        form.setFieldValue(field.name, date);
        form.setFieldTouched(field.name, true, false);
      }}
      onBlur={() => form.setFieldTouched(field.name, true)}
      minDate={new Date()}
      dateFormat="dd/MM/yyyy"
      placeholderText="Booking date*"
      className={s.input}
      calendarClassName={s.calendar}
      dayClassName={() => s.day}
      popperPlacement="top-start"
    />
  );
}
export default DatePickerField;
