import { Formik, Form, Field } from "formik";
import s from "./BookingForm.module.css";
import validate from "../../helpers/formValidate";
import DatePickerField from "../DatePickerField/DatePickerField";
import { toast } from "react-toastify";

const initialValues = {
  name: "",
  email: "",
  date: null,
  comment: "",
};

function BookingForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    toast.success("Booking request sent!");
    actions.resetForm();
  };

  return (
    <div className={s.card}>
      <h3 className={s.title}>Book your campervan now</h3>
      <p className={s.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <div className={s.fieldGroup}>
              <Field
                name="name"
                type="text"
                placeholder="Name*"
                className={s.input}
              />
              {touched.name && errors.name && (
                <p className={s.error}>{errors.name}</p>
              )}
            </div>

            <div className={s.fieldGroup}>
              <Field
                name="email"
                type="email"
                placeholder="Email*"
                className={s.input}
              />
              {touched.email && errors.email && (
                <p className={s.error}>{errors.email}</p>
              )}
            </div>

            <div className={s.fieldGroup}>
              <Field name="date" component={DatePickerField} />
              {touched.date && errors.date && (
                <p className={s.error}>{errors.date}</p>
              )}
            </div>

            <div className={s.fieldGroup}>
              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                className={s.textarea}
              />
            </div>

            <button type="submit" className={s.button}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default BookingForm;
