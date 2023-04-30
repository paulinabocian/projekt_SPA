export function Spa() {
  const spaContainer = document.createElement("div");
  spaContainer.classList.add("spa");

  const spaHeading = document.createElement("h1");
  spaHeading.innerHTML = "Zadbaj o siebie";

  const spaParagraph = document.createElement("p");
  spaParagraph.innerHTML = "Nigdzie nie zrobisz tego lepiej.";

  spaContainer.append(spaHeading);
  spaContainer.append(spaParagraph);

  return spaContainer;
}
