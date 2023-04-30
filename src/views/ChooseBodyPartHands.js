import { NavButton } from "../common/NavButton";
import { TreatmentsHands } from "./TreatmentsHands";

export function ChooseBodyPartHands() {
  const buttonHands = NavButton("Dłonie", TreatmentsHands);
  buttonHands.classList.add("chooseBodyPart");

  return buttonHands;
}
