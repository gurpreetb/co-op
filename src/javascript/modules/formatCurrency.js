const formatAmount = require("format-currency");

function formatCurrency(amount) {
  const options = { format: "%s%v", symbol: "£" };
  return formatAmount(amount, options);
}

export default formatCurrency;
