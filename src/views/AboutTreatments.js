import { NavButton } from "../common/NavButton";
import { TreatmentList } from "./TreatmentList";

export function AboutTreatment() {
  const div = document.createElement("div");
  div.classList.add("aboutTreatments");

  window.scrollTo(0, 0);

  const h2 = document.createElement("h2");
  h2.innerText = "Zabiegi wybrane spacjalnie dla Ciebie...";

  div.appendChild(h2);

  const description = document.createElement("p");
  description.classList.add("treatmentsDescription");
  description.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin libero nunc consequat interdum varius. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Porttitor eget dolor morbi non arcu risus quis varius quam. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Mattis pellentesque id nibh tortor id aliquet lectus. Adipiscing commodo elit at imperdiet dui accumsan sit amet. Quis eleifend quam adipiscing vitae proin sagittis nisl. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Eget dolor morbi non arcu risus. Etiam non quam lacus suspendisse faucibus interdum. Sed lectus vestibulum mattis ullamcorper velit. Quis commodo odio aenean sed. In nulla posuere sollicitudin aliquam ultrices. Amet nisl suscipit adipiscing bibendum est ultricies.";

  div.append(description);
  const treatmentsImg = document.createElement("img");
  treatmentsImg.src = require("../assets/abouttreatments.jpg");

  div.append(treatmentsImg);

  const treatmentsButton = NavButton("Sprawdź ofertę", TreatmentList);

  div.append(treatmentsButton);

  return div;
}
