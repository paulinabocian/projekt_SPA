import { NavButton } from "../common/NavButton";
import { TreatmentList } from "./TreatmentList";
import { BookingSummary } from "./BookingSummary";

export function BookingSuccess() {
  const div = document.createElement("div");
  div.classList.add("reservationForm");

  const h2 = document.createElement("h2");
  h2.innerText = "Gratulacje!";

  div.append(h2);

  const p = document.createElement("p");
  p.innerText = "Pomyślnie zapisano Twoją rezerwację.";

  h2.append(p);

  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("buttonsSection");

  const treatmentView = NavButton("Dobierz zabiegi", TreatmentList);

  const summaryButton = NavButton("Podsumowanie", BookingSummary);

  buttonsDiv.append(treatmentView);
  buttonsDiv.append(summaryButton);
  div.append(buttonsDiv);

  return div;
}
