import { NavButton } from "../common/NavButton";
import { TreatmentsBody } from "./TreatmentsBody";

export function ChooseBodyPartAllBody() {
  const buttonBody = NavButton("Całe ciało", TreatmentsBody);
  buttonBody.classList.add("chooseBodyPart");

  return buttonBody;
}
