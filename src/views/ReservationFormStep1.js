import { NavButton } from "../common/NavButton";
import { ReservationFormStep2 } from "./ReservationFormStep2";

export function ReservationFormStep1() {
  const form = document.createElement("div");
  form.classList.add("reservationForm");

  const h2 = document.createElement("h2");
  h2.innerText = "Rezerwacja";

  form.append(h2);

  const firstStep = document.createElement("div");
  firstStep.classList.add("step");

  const firstStepParagraph = document.createElement("p");
  firstStepParagraph.innerHTML = "Data przyjazdu: ";

  const today = new Date().toISOString().split("T")[0];

  const inputArrival = document.createElement("input");
  inputArrival.setAttribute("id", "arrivalDate");
  inputArrival.classList.add("inputs");
  inputArrival.setAttribute("type", "date");
  inputArrival.setAttribute("min", today);

  firstStep.appendChild(firstStepParagraph);
  firstStepParagraph.append(inputArrival);
  form.appendChild(firstStep);

  const nextStepButton = NavButton("Następny krok", ReservationFormStep2);
  if (inputArrival.value === "") {
    nextStepButton.setAttribute("disabled", "");
  }

  inputArrival.addEventListener("change", () => {
    let key = "arrival";
    localStorage.setItem(key, inputArrival.value);
    nextStepButton.removeAttribute("disabled", "");
  });

  form.append(nextStepButton);
  return form;
}
