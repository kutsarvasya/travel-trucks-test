const validate = (values) => {
  const errors = {};

  if (!values.name.trim()) errors.name = "Required";
  if (!values.email.trim()) {
    errors.email = "Required";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Invalid email";
  }

  if (!values.date) errors.date = "Required";

  return errors;
};
export default validate;
