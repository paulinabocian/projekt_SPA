import { NavButton } from "../common/NavButton";
import { TreatmentsBack } from "./TreatmentsBack";

export function ChooseBodyPartBack() {
  const buttonBack = NavButton("Plecy", TreatmentsBack);
  buttonBack.classList.add("chooseBodyPart");

  return buttonBack;
}
