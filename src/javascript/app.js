import "../scss/main.scss";
import { $, $$ } from "./modules/bling";

import getMockApi from "./modules/getMockApi";
import updateDonation from "./modules/updateDonation";

getMockApi($("#progress-bar"), $("#raised-so-far"), $("#target-amount"));

updateDonation(
  $("#form-donate"),
  $("#donation"),
  $("#progress-bar"),
  $("#raised-so-far"),
  $("#target-amount")
);
