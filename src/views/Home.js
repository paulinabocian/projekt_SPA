export function Home() {
  const div = document.createElement("div");
  div.classList.add("homeSection");

  const container = document.createElement("div");
  container.classList.add("homeContainer");

  container.innerHTML = `
    <p>IT SPA</p>
    <p>Zapraszamy do jedynego takiego SPA w Polsce.</p>
    `;

  const sectionDescription = document.createElement("div");
  sectionDescription.classList.add("description");

  const description = document.createElement("p");
  description.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  sectionDescription.append(description);

  const spaImage = document.createElement("img");
  spaImage.src = require("../assets/background_image.webp");
  spaImage.setAttribute("id", "spaimage");

  const spaimage2 = document.createElement("img");
  spaimage2.src = require("../assets/wypoczynek.jpg");
  spaimage2.setAttribute("id", "spaimage2");

  const hr = document.createElement("hr");

  container.append(sectionDescription);
  sectionDescription.after(spaImage);
  spaImage.after(spaimage2);
  div.append(container);
  div.append(hr);

  return div;
}
