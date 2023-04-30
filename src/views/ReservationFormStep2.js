import { NavButton } from "../common/NavButton";
import { ReservationFormStep3 } from "./ReservationFormStep3";

export function ReservationFormStep2() {
  const form = document.createElement("div");
  form.classList.add("reservationForm");

  const h2 = document.createElement("h2");
  h2.innerText = "Rezerwacja";
  form.append(h2);

  const secondStep = document.createElement("div");
  secondStep.classList.add("step");

  const secondStepParagraph = document.createElement("p");
  secondStepParagraph.innerHTML = "Data wyjazdu: ";

  secondStep.append(secondStepParagraph);

  const inputDeparture = document.createElement("input");
  inputDeparture.classList.add("inputs");
  inputDeparture.setAttribute("type", "date");

  secondStepParagraph.append(inputDeparture);

  let key = "arrival";

  const lastDate = localStorage.getItem(key);
  const date = new Date(lastDate);
  date.toLocaleDateString();

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  const minYear = date.getFullYear();
  const minMonth = padTo2Digits(date.getMonth() + 1);
  const minDay = padTo2Digits(date.getDate());

  const minDate = minYear + "-" + minMonth + "-" + minDay;

  const maxYear = date.getFullYear() + 1;
  const maxMonth = padTo2Digits(date.getMonth() + 1);
  const maxDay = padTo2Digits(date.getDate());

  const maxDate = maxYear + "-" + maxMonth + "-" + maxDay;

  inputDeparture.setAttribute("min", minDate);
  inputDeparture.setAttribute("max", maxDate);

  form.append(secondStep);

  const availabilityButton = NavButton(
    "Sprawdź dostępność",
    ReservationFormStep3
  );

  if (inputDeparture.value === "") {
    availabilityButton.setAttribute("disabled", "");
  }

  inputDeparture.addEventListener("change", () => {
    const key = "departure";
    localStorage.setItem(key, inputDeparture.value);
    availabilityButton.removeAttribute("disabled", "");
  });

  form.append(availabilityButton);
  return form;
}
