const formatPrice = (value) =>
  new Intl.NumberFormat("en-EU", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(value);
export default formatPrice;
