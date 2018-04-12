import axios from "axios";
import formatCurrency from "../modules/formatCurrency";

function getMockApi(progressBar, raisedSoFar, targetAmount) {
  axios
    .get("https://coop-mock-test-api.herokuapp.com/")
    .then(function(response) {
      const raised = response.data.raised;
      const target = response.data.target;
      progressBar.value = raised;
      progressBar.max = target;

      raisedSoFar.innerHTML = formatCurrency(raised);
      targetAmount.innerHTML = formatCurrency(target);
    })
    .catch(function(error) {
      console.log(error);
    });
}
export default getMockApi;
