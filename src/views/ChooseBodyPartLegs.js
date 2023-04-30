import { NavButton } from "../common/NavButton";
import { TreatmentsLegs } from "./TreatmentsLegs";

export function ChooseBodyPartLegs() {
  const buttonLegs = NavButton("Nogi", TreatmentsLegs);
  buttonLegs.classList.add("chooseBodyPart");

  return buttonLegs;
}
