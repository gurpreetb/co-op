import formatCurrency from "../modules/formatCurrency";

function postDonation(form, donation, progressBar, raisedSoFar, targetAmount) {
  if (!form) return;
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (donation.value > 0) {
      const totalRaised = Number(
        raisedSoFar.innerHTML.replace(/[^0-9\.-]+/g, "")
      );
      const newRaisedAmount = totalRaised + parseFloat(donation.value);
      progressBar.value = newRaisedAmount;
      raisedSoFar.innerHTML = formatCurrency(newRaisedAmount);
    }
  });
}

export default postDonation;
