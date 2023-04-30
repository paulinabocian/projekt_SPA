import { NavButton } from "../common/NavButton";
import { TermsConditions } from "./TermsConditions";
import { FAQ } from "./FAQ";

export function Footer() {
  const div = document.createElement("div");
  div.classList.add("text-muted");

  const p = document.createElement("p");
  p.innerText = "Copyright © IT SPA. All rights reserved.";

  const ul = document.createElement("ul");
  const liPartners = document.createElement("li");

  liPartners.innerHTML = `<a href="https://www.kozminski.edu.pl/pl">Partnerzy</a>`;

  const liTerms = document.createElement("li");
  const termsButton = NavButton("Regulamin", TermsConditions);
  liTerms.append(termsButton);

  const liFAQ = document.createElement("li");
  const FAQButton = NavButton("FAQ", FAQ);
  liFAQ.append(FAQButton);

  ul.appendChild(liPartners);
  ul.append(liTerms);
  ul.append(liFAQ);

  div.append(p);
  div.append(ul);
  return div;
}
